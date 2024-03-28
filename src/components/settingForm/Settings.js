import { Outlet } from 'react-router-dom';

import './settings.scss';

const Settings = () => {
	return (
		<div className='settings'>
			<div className='sidebar'>
				<div className='link-container'>
					<a href='/settings/profile'>My account</a>
					<a href='/settings/history'>My history</a>
					<a href='/settings/security'>Security</a>
				</div>
				<a href='/login' className='logout-btn'>
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
