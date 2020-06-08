import {fileURLToPath} from 'url';
import t from 'libtap';
import glob from 'glob';

process.env.NODE_OPTIONS = '--experimental-loader=@istanbuljs/esm-loader-hook';
process.chdir(fileURLToPath(new URL('..', import.meta.url)));

const tests = glob.sync('test/**/*.js', {ignore: 'test/runner.js'});

for (const test of tests) {
	t.spawn(process.execPath, [test], test);
}
