import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./node_modules/object.assign/package.json'));
/* BUGBUG: do something. */
export default data.version;
