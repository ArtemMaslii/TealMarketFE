import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from 'reducer/authSlice';

import './settings.scss';

const Settings = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutSuccess());
	};

	return (
		<div className='settings'>
			<div className='sidebar'>
				<div className='link-container'>
					<a href='/settings/profile'>My account</a>
				</div>
				<a href='/logout' className='logout-btn' onClick={handleLogout}>
					Log out
				</a>
			</div>
			<div className='content'>
				<Outlet />
			</div>
		</div>
	);
};

export default Settings;
