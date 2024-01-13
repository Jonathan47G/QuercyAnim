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
			fontFamily: {
				playfair: ['var(--font-playfair)'],
				josefin: ['var(--font-josefin)'],
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
					"Border-ring-1": "#5958B1",
					"Solid-1" : "#5B5BD6",
					"Solid-2" : "#6E6ADE",
					"Secondary-text": "#B1A9FF",
					"Primary-text" : "#E0DFFE",
				},
				gold : {
					"Background-1": "#121211",
					"Background-2": "#1B1A17",
					"Interactive-1": "#24231F",
					"Interactive-2": "#2D2B26",
					"Interactive-3": "#38352E",
					"Border-sep-1": "#444039",
					"Border-sep-2": "#544F46",
					"Border-ring-1": "#696256",
					"Solid-1" : "#978365",
					"Solid-2" : "#A39073",
					"Secondary-text": "#CBB99F",
					"Primary-text" : "#E8E2D9",
				}
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
