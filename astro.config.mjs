// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.brownrisd.games',
    integrations: [starlight({
        title: 'BRGD Club Documentation',
        favicon: './public/favicon.png',
        logo: {
            light: './src/assets/brgd-logo-black.png',
            dark: './src/assets/brgd-logo-white.png',
            replacesTitle: true,
        },
        social: [
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/dhrKyse6RH' },
            { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/brownrisdgamedev/' },
            { icon: 'github', label: 'GitHub', href: 'https://github.com/BrownRISDGameDevelopers/docs/' },
        ],
        editLink: {
        		baseUrl: 'https://github.com/BrownRISDGameDevelopers/docs/edit/main/',
        },
		lastUpdated: true, 
        sidebar: [
            {
                label: 'Getting Started',
                autogenerate: { directory: 'getting-started' },
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), 
		mdx()],
});