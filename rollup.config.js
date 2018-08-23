export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/od-emojis.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'od-emojis',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'rxjs': 'Rx'
	}
}
