import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './phoneModels.scss';
import { Helmet } from 'react-helmet';
import { generateImg } from 'service/generateImages';

const PhoneModels = ({ models }) => {
	const { companyName } = useParams();

	return (
		<div className='models__body'>
			<Helmet>
				<title>Company page with products</title>
				<meta name='description' content='Page with navigation between models and all models to buy' />
			</Helmet>
			<div className='products'>
				{models.map((model) => (
					<div className='products__container' key={model.name}>
						<img src={generateImg(model.name, model.colors[0].name)} alt={model.name} />{' '}
						<div className='description'>
							<div className='main'>
								<h1>{model.name}</h1>
								<div className='colors'>
									{model.colors.map((color) => (
										<span key={color.name} className={color.name}></span>
									))}
								</div>
							</div>
							<div className='wrapper'>
								<h3>From {model.price}$</h3>
								<Link to={`/shop/${companyName}/${model.id.toString()}`}>Buy</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PhoneModels;
