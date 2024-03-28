import CompanySelector from "components/companySelector/companySelector";

import "./shopCompanyList.scss";

const shopCompanyList = () => {
	const companies = [
		{
			id: 1,
			title: "Pixel",
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/Shop/PixelShop.png",
			company: "pixel",
		},
		{
			id: 2,
			title: "Iphone",
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/Shop/IphoneShop.png",
			bgColor: "black",
			textColor: "#f6f5f7",
			company: "iphone",
		},
		{
			id: 3,
			title: "Galaxy",
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/Shop/SamsungShop.png",
			company: "galaxy",
		},
	];

	return (
		<div className="shop__grid">
			{companies.map((company) => (
				<CompanySelector
					key={company.id}
					title={company.title}
					img={company.img}
					bgColor={company.bgColor}
					textColor={company.textColor}
					company={company.company}
				/>
			))}
		</div>
	);
};

export default shopCompanyList;
