import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '',
	plugins: [
		{ enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
		react(),
	],
})
