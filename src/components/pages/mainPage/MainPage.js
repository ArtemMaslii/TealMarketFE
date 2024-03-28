// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBanners } from "actions/bannerActions";
// import Banner from "components/banner/Banner";

// const MainPage = () => {
//     const dispatch = useDispatch();
//     const { banners, loading, error } = useSelector((state) => state.banners);

//     useEffect(() => {
//       dispatch(fetchBanners());
//     }, [dispatch]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//       <>
//         {banners.map((banner) => (
//           <Banner
//             key={banner.id}
//             deviceType={banner.deviceType}
//             img={banner.img}
//             alt={banner.alt}
//             h2={banner.h2}
//             h3={banner.h3}
//           />
//         ))}
//       </>
//     );
//   };

//   export default MainPage;

import Banner from 'components/banner/Banner';

const MainPage = () => {
	return (
		<>
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
