import React from 'react';
import './banner.scss';

const Banner = ({ deviceType, img, name, description }) => {
	return (
		<article className={`${deviceType}-banner`}>
			<div className={`${deviceType}-banner__info`}>
				<h2>{name}</h2>
				<h3>{description}</h3>
				<div className={`${deviceType}-banner__link-wrapper`}>
					<a href='/shop' className={`${deviceType}-banner__link`}>
						Buy now
					</a>
					<a href='/shop' className={`${deviceType}-banner__link`}>
						Learn more
					</a>
				</div>
			</div>
			<div className={`${deviceType}-banner__picture`}>
				<img src={img} alt={name} />
			</div>
		</article>
	);
};

export default Banner;
