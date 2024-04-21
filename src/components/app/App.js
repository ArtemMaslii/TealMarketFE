import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from 'components/pages/mainPage/MainPage';
import ShopModels from 'components/pages/shopModels/ShopModels';
import Shop from 'components/pages/shopCompanyList/shopCompanyList';
import LoginPage from 'components/pages/loginPage/LoginPage';
import Page404 from 'components/pages/404/Page404';
import Product from 'components/product/Product';
import Layout from 'components/app/Layout';
import Cart from 'components/pages/cart/Cart';
import Settings from 'components/settingForm/Settings';
import History from 'components/settingForm/history/History';
import Profile from 'components/settingForm/profile/Profile';
import Security from 'components/settingForm/security/Security';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='shop' element={<Shop />} />
					<Route path='shop/:companyName' element={<ShopModels />} />
					<Route path='shop/:companyName/:id' element={<Product />} />
					<Route path='cart' element={<Cart />} />
					<Route path='settings' element={<Settings />}>
						<Route path='profile' element={<Profile />} />
						<Route path='history' element={<History />} />
						<Route path='security' element={<Security />} />
					</Route>
				</Route>
				<Route path='*' element={<Page404 />} />
			</Routes>
		</Router>
	);
}

export default App;
