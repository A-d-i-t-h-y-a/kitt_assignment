import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				stretchLine: {
					'0%': { transform: 'translateX(0vw)', width: '0%' },
					'20%': { transform: 'translateX(20vw)', width: '40%' },
					'40%': { transform: 'translateX(30vw)', width: '50%' },
					'50%': { transform: 'translateX(40vw)', width: '45%' },
					'60%': { transform: 'translateX(60vw)', width: '30%' },
					'80%': { transform: 'translateX(80vw)', width: '15%' },
					'100%': { transform: 'translateX(100vw)', width: '0%' },
				},
			},
			animation: {
				stretchLine: 'stretchLine 1s ease-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
