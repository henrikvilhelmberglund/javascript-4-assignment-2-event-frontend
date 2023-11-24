import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns';
import { createSafeList } from './src/lib/theme/safelist.ts';
import { themes } from './src/lib/theme/theme.ts';
import presetTheme from 'unocss-preset-theme';

export const reloadMe = true;

export default defineConfig({
	rules: [
		// [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
		// [/^text-(.*)$/, ([, c], { theme }) => {
		// if (theme.colors[c])
		// return { color: theme.colors[c] }
		// }],
	],
	shortcuts: [
		{
			'nav-button':
				'rounded-lg p-1 md:p-4 font-elite text-emerald-500 text-center hover:underline underline-none underline-1 underline-offset-4 transition-all text-xl md:text-4xl',
			active: 'text-emerald-300',
			'my-h1': 'font-heading drop-shadow-color-black pt-8 text-4xl text-emerald-500 drop-shadow-lg md:text-7xl',
			'my-h2': 'p-2 font-elite mt-6 text-xl text-emerald-500 md:text-3xl',
		},
		[/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-800 text-xl p-4 rounded-lg transition-all hover:bg-${c}-300`],
	],
	safelist: [
		...Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)).map((char) => `font-${char}`),
		...createSafeList(),
		`font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
        btn-primary btn-secondary`,
		// 'bg-[url(/andree-wallin-1118.webp)]',
	],
	// TODO UnoCSS fix bug with using this variant and "active" in safelist
	variants: [
		{
			match: (matcher) => {
				if (!matcher.startsWith('hover:')) return matcher;
				return {
					matcher: matcher.slice(6),
					parent: '@media (hover) and (pointer: fine)',
					selector: (s) => `${s}:hover`,
				};
			},
			order: -1,
		},
	],
	theme: {
		animation: {
			keyframes: {
				'slide-out-down-custom': '{from{transform:translate3d(0,0,0);opacity:1}to{visibility:hidden;transform:translate3d(0,100%,0);opacity:0}}',
			},
		},
	},
	presets: [
		presetUno({ dark: 'class' }),
		presetForms(),
		presetTheme({
			theme: themes,
		}),
		presetHeroPatterns(),
		presetWebFonts({
			provider: 'google', // default provider
			fonts: {
				// these will extend the default theme
				sans: ['Mooli', 'Roboto'],
				mono: ['Fira Code', 'Fira Mono:400,700'],
				// custom ones
				lobster: 'Lobster',
				lato: [
					{
						name: 'Lato',
						weights: ['400', '700'],
						italic: true,
					},
					{
						name: 'sans-serif',
						provider: 'none',
					},
				],
				a: 'Playfair Display',
				b: 'Lora',
				heading: 'Cinzel',
				elite: 'Special Elite',
			},
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				// ...
			},
		}),
	],
});
