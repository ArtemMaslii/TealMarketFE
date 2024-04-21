import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { initializeProduct, setColor, setStorage, setImage } from 'reducer/productSlice';
import { addItem } from 'reducer/cartSlice';
import { fetchModel } from 'actions/shopActions';

import './product.scss';
import { Helmet } from 'react-helmet';

const Product = () => {
	const { companyName, id } = useParams();
	const dispatch = useDispatch();
	const { product, loading, error, currentImage, images, financingPeriod, selectedColor, selectedStorage } =
		useSelector((state) => state.product);

	useEffect(() => {
		if (companyName && id) {
			dispatch(fetchModel({ companyName, id })).then((response) => {
				const result = response.payload;
				dispatch(initializeProduct(result));
			});
		}
	}, [dispatch, companyName, id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error...</div>;
	}

	if (!product) {
		return <div>Product not found</div>;
	}

	const handleImgSelection = (img) => {
		dispatch(setImage({ product, color: selectedColor, image: img }));
	};

	const handleColorSelection = (color) => {
		dispatch(setColor({ product, color }));
	};

	const handleStorageSelection = (storage) => {
		dispatch(setStorage({ product, storage }));
	};

	const handleAddToCart = () => {
		const productItem = {
			name: product.name,
			img: images[0],
			price: product.price,
			color: selectedColor.name,
			storage: selectedStorage.storage,
		};

		dispatch(addItem(productItem));
	};

	return (
		<div className='product__body'>
			<Helmet>
				<title>Model Page</title>
				<meta name='description' content='Model page to pick color and storage space to buy' />
			</Helmet>
			<div className='pictures'>
				<div className='current'>{currentImage && <img src={currentImage} alt={product.name} />}</div>
				<div className='pictures__sides'>
					{images.map((img, index) => (
						<button
							key={index}
							aria-label={`Change image to ${index + 1}`}
							onClick={() => handleImgSelection(img)}
							className={currentImage === img ? 'selected' : ''}
						>
							<img src={img} alt={`${product.name} ${index + 1}`} />
						</button>
					))}
				</div>
			</div>
			<div className='info'>
				<div className='underline'>
					<h1>{product.name}</h1>
					<h2 className='price'>From {product.price}$</h2>
					<h5>
						or ${(product.price / financingPeriod).toFixed(2)} with {financingPeriod}-month financing, before trade-in
					</h5>
				</div>
				<div className='underline'>
					<h2 className='choose-color'>Choose your color</h2>
					<div className='colors'>
						{product.colors &&
							product.colors.map(
								(color) =>
									color &&
									color.name && (
										<button
											className={`color ${selectedColor === color.name ? 'selected' : ''}`}
											key={color.name}
											onClick={() => handleColorSelection(color.name)}
										>
											<span className={color.name}></span>
											<div>{color.name.charAt(0).toUpperCase() + color.name.slice(1)}</div>
										</button>
									)
							)}
					</div>
				</div>
				<div className='underline'>
					<h3>Choose your storage space</h3>
					{product.storages &&
						product.storages.map(
							(space, index) =>
								space &&
								space.capacity && (
									<button
										className={`storage-space ${selectedStorage === space.capacity ? 'selected' : ''}`}
										key={index}
										onClick={() => handleStorageSelection(space.capacity)}
									>
										{space.capacity}
									</button>
								)
						)}
				</div>
				<div className='buy-wrapper'>
					<h4 className='price'>${product.price}</h4>
					<h5>
						or ${(product.price / financingPeriod).toFixed(2)} with {financingPeriod}-month financing, before trade-in
					</h5>
					<Link to='/cart' onClick={handleAddToCart}>
						Buy
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
