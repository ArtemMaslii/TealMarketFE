import Banner from 'components/banner/Banner';
import { Helmet } from 'react-helmet';

const MainPage = () => {
	return (
		<>
			<Helmet>
				<title>Home</title>
				<meta name='description' content='Home page with banners of Iphone 15 Pro, Galaxy S24 Ultra, and Pixel 8 Pro' />
			</Helmet>
			<Banner
				deviceType='samsung'
				img='https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/MainPage/MainPageGalaxy.jpg'
				name='Samsung S24 Ultra'
				description='Galaxy AI is here'
			/>
			<Banner
				deviceType='iphone'
				img='https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/MainPage/MainPageIphone.jpg'
				name='Iphone 15 Pro'
				description='Titanium. So strong. So light. So Pro'
			/>
			<Banner
				deviceType='pixel'
				img='https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/MainPage/MainPagePixel.png'
				name='Google Pixel 8 Pro'
				description='Every moment, even better than you remember it'
			/>
		</>
	);
};

export default MainPage;
