import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	integrations: [react()],
	output: 'server',
	adapter: node({ mode: 'standalone' }),
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@types': path.resolve(__dirname, 'src/@types'),
				components: path.resolve(__dirname, 'src/components'),
				constant: path.resolve(__dirname, 'src/constant'),
				helpers: path.resolve(__dirname, 'src/helpers'),
				layouts: path.resolve(__dirname, 'src/layouts'),
				patterns: path.resolve(__dirname, 'src/patterns'),
				services: path.resolve(__dirname, 'src/services'),
				views: path.resolve(__dirname, 'src/views'),
			},
		},
	},
});
