import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	bundle: false,
	dts: true,
	entry: ['src/**/*.ts'],
	format: ['cjs'],
	minify: false,
	tsconfig: 'tsconfig.json',
	target: 'es2020',
	splitting: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	shims: false,
	keepNames: true,
	outDir: 'dist'
});
