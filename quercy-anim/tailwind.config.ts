import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/conteneurs/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				iris: {
					"Background-1": "#13131E",
					"Background-2": "#171625",
					"Interactive-1": "#202248",
					"Interactive-2": "#262A65",
					"Interactive-3": "#303374",
					"Border-sep-1": "#3D3E82",
					"Border-sep-2": "#4A4A95",
				},
			},
			animation: {
				slideRight: "slideRight 600ms",
				slideLeft: "slideLeft 600ms",
			},
			keyframes: {
				slideRight: {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(0)",
					},
				},
				slideLeft: {
					"0%": {
						transform: "translateX(-100%)", 
					},
					"100%": {
						transform: "translateX(0)",
					},
				},
			},
			plugins: [],
		},
	},
};
export default config;
