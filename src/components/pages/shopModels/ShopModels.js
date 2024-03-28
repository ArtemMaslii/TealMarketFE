// import { fetchFilters, fetchModels } from "actions/shopActions";

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import PhoneModels from "components/phoneModels/PhoneModels";
import { useParams } from "react-router-dom";
import { models, nav } from "api/data";

const ShopModels = () => {
	const { companyName } = useParams();

	const companyModels = models[companyName] || [];
	const companyFilters = nav[companyName] || [];
	// const dispatch = useDispatch();
	// const { filters, models, loading, error } = useSelector((state) => state.shop);
	// useEffect(() => {
	// 	if (companyName) {
	// 		dispatch(fetchFilters(companyName));
	// 		dispatch(fetchModels(companyName));
	// 	}
	// }, [dispatch, companyName]);
	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error}</div>;
	return <PhoneModels nav={companyFilters} models={companyModels} />;
};

export default ShopModels;
