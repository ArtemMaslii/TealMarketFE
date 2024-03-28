const filters = {
	pixel: [
		{
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/ShopModels/GooglePixel/Pixel8.png",
			name: "Pixel 8",
		},
		{
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/ShopModels/GooglePixel/Pixel7.png",
			name: "Pixel Fold",
		},
	],
	iphone: [
		{
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/ShopModels/Iphone/Iphone15.png",
			name: "Iphone 15",
		},
		{
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/ShopModels/Iphone/Iphone14.png",
			name: "Iphone 14",
		},
	],
	galaxy: [
		{
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/ShopModels/SamsungGalaxy/GalaxyS24.png",
			name: "Galaxy S24",
		},
		{
			img: "https://images-bucket-teal-market.s3.eu-north-1.amazonaws.com/ShopModels/SamsungGalaxy/GalaxyFold.png",
			name: "Galaxy Fold",
		},
	],
};

const products = {
	pixel: [
		{
			name: "Pixel 8 Pro",
			price: 999,
			colors: ["mint", "bay", "obsidian", "porcelain"],
			storageSpaces: ["128 GB", "256 GB"],
			imgCount: [1, 2, 3, 4],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/pixel8Pro/";
				return this.colors.includes(color) ? this.imgCount.map((num) => `${baseUrl}${color}/Pixel8Pro${num}.png`) : [];
			},
		},
		{
			name: "Pixel 8",
			price: 799,
			colors: ["mint", "hazel", "obsidian", "rose"],
			storageSpaces: ["128 GB", "256 GB"],
			imgCount: [1, 2, 3, 4],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/pixel8/";
				return this.colors.includes(color) ? this.imgCount.map((num) => `${baseUrl}${color}/Pixel8${num}.png`) : [];
			},
		},
		{
			name: "Pixel Fold",
			price: 1799,
			colors: ["obsidian", "porcelain"],
			storageSpaces: ["128 GB", "256 GB"],
			imgCount: [1, 2, 3, 4],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/pixelFold/";
				return this.colors.includes(color) ? this.imgCount.map((num) => `${baseUrl}${color}/PixelFold${num}.png`) : [];
			},
		},
	],
	iphone: [
		{
			name: "Iphone 15 Pro",
			price: 999,
			colors: ["black", "blue", "natural", "white"],
			storageSpaces: ["128 GB", "256 GB", "512 GB", "1 TB"],
			imgCount: [1, 2, 3, 4],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/iphone15Pro/";
				return this.imgCount.map((num) => `${baseUrl}${color}/Iphone15Pro${num}.png`);
			},
		},
		{
			name: "Iphone 15",
			price: 799,
			colors: ["black", "blue", "green", "pink", "yellow"],
			storageSpaces: ["128 GB", "256 GB", "512 GB", "1 TB"],
			imgCount: [1, 2, 3],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/iphone15/";
				return this.colors.includes(color) ? this.imgCount.map((num) => `${baseUrl}${color}/Iphone15${num}.png`) : [];
			},
		},
		{
			name: "Iphone 14 Pro",
			price: 999,
			colors: ["black", "gold", "purple", "silver"],
			storageSpaces: ["128 GB", "256 GB", "512 GB", "1 TB"],
			imgCount: [1, 2, 3],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/iphone14Pro/";
				return this.colors.includes(color)
					? this.imgCount.map((num) => `${baseUrl}${color}/Iphone14Pro${num}.png`)
					: [];
			},
		},
	],
	galaxy: [
		{
			name: "Galaxy S24 Ultra",
			price: 1199,
			colors: ["black", "grey", "purple", "yellow"],
			storageSpaces: ["128 GB", "256 GB", "512 GB"],
			imgCount: [1, 2],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/galaxyS24Ultra/";
				return this.colors.includes(color)
					? this.imgCount.map((num) => `${baseUrl}${color}/GalaxyS24Ultra${num}.png`)
					: [];
			},
		},
		{
			name: "Galaxy S24",
			price: 899,
			colors: ["black", "white", "purple", "yellow"],
			storageSpaces: ["128 GB", "256 GB", "512 GB"],
			imgCount: [1, 2, 3],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/galaxyS24/";
				return this.colors.includes(color) ? this.imgCount.map((num) => `${baseUrl}${color}/GalaxyS24${num}.png`) : [];
			},
		},
		{
			name: "Galaxy Fold 5",
			price: 1699,
			colors: ["black", "blue", "creamy"],
			storageSpaces: ["128 GB", "256 GB", "512 GB"],
			imgCount: [1, 2],
			generateImageUrls: function (color) {
				const baseUrl = "https://images-bucket-teal-market.s3.amazonaws.com/product/galaxyFold5/";
				return this.colors.includes(color)
					? this.imgCount.map((num) => `${baseUrl}${color}/GalaxyFold5${num}.png`)
					: [];
			},
		},
	],
};

export const pixelModel = products.pixel,
	iphoneModel = products.iphone,
	galaxyModel = products.galaxy,
	pixelFilter = filters.pixel,
	iphoneFilter = filters.iphone,
	galaxyFilter = filters.galaxy,
	models = products,
	nav = filters;
