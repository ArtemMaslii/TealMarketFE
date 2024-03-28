import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { models } from "api/data";
import { useDispatch, useSelector } from "react-redux";
import { initializeProduct, setColor, setStorage, setImage } from "reducer/productSlice";
import { addItem } from "reducer/cartSlice";

import "./product.scss";
import { Helmet } from "react-helmet";

const Product = () => {
	const { companyName, productName } = useParams();
	const dispatch = useDispatch();
	const { currentImage, images, price, financingPeriod, selectedColor, selectedStorage } = useSelector(
		(state) => state.product
	);

	const product = useMemo(
		() => models[companyName]?.find((p) => p.name.replace(/\s+/g, "").toLowerCase() === productName.toLowerCase()),
		[companyName, productName]
	);

	useEffect(() => {
		if (product) {
			dispatch(initializeProduct({ product, price: product.price }));
		}
	}, [product, dispatch]);

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
			price,
			color: selectedColor,
			storage: selectedStorage,
		};

		dispatch(addItem(productItem));
	};

	return (
		<div className="product__body">
			<Helmet>
				<title>Model Page</title>
				<meta name="description" content="Model page to pick color and storage space to buy" />
			</Helmet>
			<div className="pictures">
				<div className="current">{currentImage && <img src={currentImage} alt={product.name} />}</div>
				<div className="pictures__sides">
					{images.map((img, index) => (
						<button
							key={index}
							aria-label={`Change image to ${index + 1}`}
							onClick={() => handleImgSelection(img)}
							className={currentImage === img ? "selected" : ""}
						>
							<img src={img} alt={`${product.name} ${index + 1}`} />
						</button>
					))}
				</div>
			</div>
			<div className="info">
				<div className="underline">
					<h1>{product.name}</h1>
					<h2 className="price">From {price}$</h2>
					<h5>
						or ${(price / financingPeriod).toFixed(2)} with {financingPeriod}-month financing, before trade-in
					</h5>
				</div>
				<div className="underline">
					<h2 className="choose-color">Choose your color</h2>
					<div className="colors">
						{product.colors.map((color) => (
							<button
								className={`color ${selectedColor === color ? "selected" : ""}`}
								key={color}
								onClick={() => handleColorSelection(color)}
							>
								<span className={color}></span>
								<div>{color.charAt(0).toUpperCase() + color.slice(1)}</div>
							</button>
						))}
					</div>
				</div>
				<div className="underline">
					<h3>Choose your storage space</h3>
					{product.storageSpaces.map((space, index) => (
						<button
							className={`storage-space ${selectedStorage === space ? "selected" : ""}`}
							key={index}
							onClick={() => handleStorageSelection(space)}
						>
							{space}
						</button>
					))}
				</div>
				<div className="buy-wrapper">
					<h4 className="price">${price}</h4>
					<h5>
						or ${(price / financingPeriod).toFixed(2)} with {financingPeriod}-month financing, before trade-in
					</h5>
					<Link to="/cart" onClick={handleAddToCart}>
						Buy
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
