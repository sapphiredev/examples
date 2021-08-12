import { opendir, rm } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath, URL } from 'url';

async function* scan(path, cb) {
	const dir = await opendir(typeof path === 'string' ? path : fileURLToPath(path));

	for await (const item of dir) {
		const file = join(dir.path, item.name);
		if (item.isFile()) {
			if (cb(file)) yield file;
		} else if (item.isDirectory()) {
			yield* scan(file, cb);
		}
	}
}

const rootDir = new URL('../', import.meta.url);
const options = { recursive: true, force: true };

const packageLockRegexp = /package-lock\.json$/;
const cb = (path) => packageLockRegexp.test(path);

const paths = [new URL('node_modules/', rootDir)];

for await (const path of scan(rootDir, cb)) {
	if (path.includes('node_modules')) {
		continue;
	}

	paths.push(path);
}

await Promise.all(paths.map((path) => rm(path, options)));
