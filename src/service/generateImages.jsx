export const generateImg = (name, color) => {
	const folder = name.charAt(0).toLowerCase() + name.slice(1).replace(/\s+/g, '');
	return `https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/product/${folder}/${color}/${name.replace(
		/\s+/g,
		''
	)}1.png`;
};

export const generateImgs = (name, color) => {
	const folder = name.charAt(0).toLowerCase() + name.slice(1).replace(/\s+/g, '');
	return [1, 2, 3, 4].map(
		(i) =>
			`https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/product/${folder}/${color.name}/${name.replace(
				/\s+/g,
				''
			)}${i}.png`
	);
};
