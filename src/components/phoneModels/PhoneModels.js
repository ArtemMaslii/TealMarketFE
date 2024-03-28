import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./phoneModels.scss";
import { useState } from "react";

const PhoneModels = ({ nav, models }) => {
	const { companyName } = useParams();
	const [filteredModels, setFilteredModels] = useState(models);
	const [activeFilter, setActiveFilter] = useState(null);

	const handleNavItemClick = (itemName) => {
		if (activeFilter === itemName) {
			setFilteredModels(models);
			setActiveFilter(null);
		} else {
			const filtered = models.filter((model) => model.name.includes(itemName));
			setFilteredModels(filtered);
			setActiveFilter(itemName);
		}
	};

	return (
		<div className="models__body">
			<div className="nav">
				{nav.map((model) => (
					<div className="item" key={model.name}>
						<img src={model.img} alt={model.name} onClick={() => handleNavItemClick(model.name)} />
						<h4>{model.name}</h4>
					</div>
				))}
			</div>
			<div className="products">
				{filteredModels.map((model) => (
					<div className="products__container" key={model.name}>
						<img src={model.generateImageUrls(model.colors[0])[0]} alt={model.name} />{" "}
						<div className="description">
							<div className="main">
								<h1>{model.name}</h1>
								<div className="colors">
									{model.colors.map((color) => (
										<span key={color} className={color}></span>
									))}
								</div>
							</div>
							<div className="wrapper">
								<h3>From {model.price}$</h3>
								<Link to={`/shop/${companyName}/${model.name.replace(/\s+/g, "").toLowerCase()}`}>Buy</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PhoneModels;
