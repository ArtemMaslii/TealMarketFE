import { fetchFilters, fetchModels } from 'actions/shopActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PhoneModels from 'components/phoneModels/PhoneModels';

const ShopModels = () => {
	const { companyName } = useParams();
	const dispatch = useDispatch();
	const { filters, models, loading, error } = useSelector((state) => state.shop);
	useEffect(() => {
		if (companyName) {
			dispatch(fetchFilters(companyName));
			dispatch(fetchModels(companyName));
		}
	}, [dispatch, companyName]);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	return <PhoneModels nav={filters} models={models} />;
};

export default ShopModels;
