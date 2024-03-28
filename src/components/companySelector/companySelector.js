import "./companySelector.scss";

const CompanySelector = ({title, img, bgColor="#f6f5f7", textColor="black", index="z-0", company}) => {
    return (
        <a href={`/shop/${company}`} className="banner__container" style={{backgroundColor: `${bgColor}`, color: `${textColor}`}}>
            <h1>{title}</h1>
            <img src={img} alt={title} className={index} />
        </a>
    );
};

export default CompanySelector;