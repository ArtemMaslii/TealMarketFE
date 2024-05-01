import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import SubmitButton from 'components/submitButton/SubmitButton';
import { updateUserData } from 'actions/userActions';
import * as Yup from 'yup';
import { useEffect } from 'react';

const Profile = () => {
	const { userData } = useSelector((state) => state.auth);
	const address = userData.address || {
		country: '',
		city: '',
		street: '',
		postCode: '',
	};
	const dispatch = useDispatch();

	useEffect(() => {}, [userData]);

	const handleSubmit = (values) => {
		const newData = { ...userData, address: values };
		dispatch(updateUserData({ data: newData, id: userData.id }));
	};

	return (
		<div className='profile'>
			<div>
				<Formik
					initialValues={userData}
					onSubmit={handleSubmit}
					validationSchema={Yup.object({
						username: Yup.string()
							.matches(
								/^[a-zA-Z0-9]{1,20}$/,
								"Username shouldn't be longer than 20 characters and shouldn't contain special characters"
							)
							.nonNullable(),
						email: Yup.string().email('Invalid email format').nonNullable(),
					})}
				>
					<Form>
						<h2>Profile</h2>
						<div className='form-group'>
							<label htmlFor='username'>Username</label>
							<Field type='text' name='username' />
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<Field type='email' name='email' />
						</div>
						<SubmitButton />
					</Form>
				</Formik>
			</div>
			<div>
				<h2>Address</h2>
				<Formik
					initialValues={address}
					onSubmit={handleSubmit}
					validationSchema={Yup.object({
						country: Yup.string().nonNullable(),
						city: Yup.string().nonNullable(),
						street: Yup.string().nonNullable(),
						postCode: Yup.string().nonNullable(),
					})}
				>
					<Form>
						<div className='form-group'>
							<label htmlFor='country'>Country</label>
							<Field type='text' name='country' />
						</div>
						<div className='form-group'>
							<label htmlFor='city'>City</label>
							<Field type='text' name='city' />
						</div>
						<div className='form-group'>
							<label htmlFor='street'>Street</label>
							<Field type='text' name='street' />
						</div>
						<div className='form-group'>
							<label htmlFor='postCode'>Post code</label>
							<Field type='text' name='postCode' />
						</div>
						<SubmitButton />
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default Profile;
