// import Bee from '@beyond-js/bee';

// Bee(`http://localhost:${port}`);

var BEE = require('@beyond-js/bee');
const port = '950';
test('bee', async () => {
	BEE(`http://localhost:${port}`, {});
	//import { PackageSpecifier } from '@beyond-js/specifier-parser/main';
	const module = await bimport('@beyond-js/specifier-parser@0.0.1/main');
	console.log(33, module);
	expect(3).toBe(3);
});
