import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import './loginPage.scss';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, loginUser } from 'actions/userActions';

const LoginPage = () => {
	const [activeClass, setActiveClass] = useState('');
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleRegistration = async (values, { resetForm, setSubmitting }) => {
		try {
			dispatch(createUser(values));
			navigate('/');
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
			resetForm();
		}
	};

	const handleLogin = async (values, { resetForm, setSubmitting }) => {
		try {
			dispatch(loginUser(values));
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
			resetForm();
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	}, [isLoggedIn, navigate]);

	const handleClick = () => {
		setActiveClass(activeClass === '' ? 'right-panel-active' : '');
	};

	return (
		<div className='body-container'>
			<Helmet>
				<title>Log In Page</title>
				<meta name='description' content='Log in page to register or log in' />
			</Helmet>
			<div className={`main-container ${activeClass}`} id='container'>
				<div className='form-container sign-up-container'>
					<LoginForm
						initialValues={{ username: '', email: '', password: '' }}
						onSubmit={(values, { resetForm, setSubmitting }) =>
							handleRegistration(values, { resetForm, setSubmitting })
						}
						validationSchema={Yup.object({
							username: Yup.string()
								.matches(
									/^[a-zA-Z0-9]{1,20}$/,
									"Username shouldn't be longer than 20 characters and shouldn't contain special characters"
								)
								.required('Username is required'),
							email: Yup.string().email('Invalid email format').required('Email is required'),
							password: Yup.string()
								.min(8, 'Password must be at least 8 characters long')
								.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
								.matches(/[0-9]/, 'Password must contain at least one number')
								.matches(/[!@#$%^&*_]/, 'Password must contain at least one special character')
								.test('password', 'Password must meet all requirements', (value) =>
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,}$/.test(value)
								)
								.required('Password is required'),
						})}
						title='Create Account'
						logo='https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/logo/Blue-duck.png'
						buttonText='Sign Up'
					/>
				</div>
				<div className='form-container sign-in-container'>
					<LoginForm
						initialValues={{ email: '', password: '' }}
						onSubmit={(values, { resetForm, setSubmitting }) => handleLogin(values, { resetForm, setSubmitting })}
						validationSchema={Yup.object({
							email: Yup.string().email('Invalid email format').required('Email is required'),
							password: Yup.string()
								.min(8, 'Password must be at least 8 characters long')
								.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
								.matches(/[0-9]/, 'Password must contain at least one number')
								.matches(/[!@#$%^&*_]/, 'Password must contain at least one special character')
								.test('password', 'Password must meet all requirements', (value) =>
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,}$/.test(value)
								)
								.required('Password is required'),
						})}
						title='Sign in'
						logo='https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/logo/Oragne-duck.png'
						buttonText='Sign In'
					/>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<Overlay
							overlayDirection='overlay-left'
							title='Welcome Back!'
							info='To keep connected with us please login with your personal info'
							buttonText='Sign In'
							handleClick={handleClick}
						/>
						<Overlay
							overlayDirection='overlay-right'
							title='Hello, Friend!'
							info='Enter your personal details and start journey with us'
							buttonText='Sign Up'
							handleClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Overlay = ({ overlayDirection, title, info, buttonText, handleClick }) => {
	return (
		<div className={`overlay-panel ${overlayDirection}`}>
			<h1 className='title'>{title}</h1>
			<p className='info'>{info}</p>
			<button className='btn ghost' onClick={handleClick}>
				{buttonText}
			</button>
		</div>
	);
};

export default LoginPage;
