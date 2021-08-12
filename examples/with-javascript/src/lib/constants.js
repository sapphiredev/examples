const { join } = require('path');

const rootDir = join(__dirname, '..', '..');
const srcDir = join(rootDir, 'src');

module.exports = {
	rootDir,
	srcDir
};
