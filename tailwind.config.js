/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			black: "#000000",
			grayLight: "#F4F4F4",
			white: "#ffffff",
			transparent: "transparent",
			coral: {
				100: "#FF7F50",
				200: "#ff8559",
				300: "#ffb59c",
			},
			mint: "#98FF98",
			bay: "#1F75FE",
			obsidian: "#000000",
			snow: "#FFFFFF",
			sea: "#2E8B57",
			lemongrass: "#9ACD32",
			charcoal: "#36454F",
			hazel: "#8E7618",
			peach: "#FFDAB9",
			chalk: "#F5F5F5",
			sage: "#9DC183",
			porcelain: "#EFF0F1",
			rose: "#FF007F",
			turquoiseDark: "#007777",
			turquoiseLight: "#66b2b2",
			gainsboro: "#ecf0f3",
		},
		extend: {
			maxWidth: {
				300: "300px",
				400: "400px",
			},
			minHeight: {
				200: "200px",
				500: "500px",
			},
		},
	},
	plugins: [],
};
