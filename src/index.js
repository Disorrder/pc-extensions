import './extensions';
export * from './modules';
export * from './utils';

if (!VERSION) {
    let pkg = require('../package.json');
    var VERSION = pkg.version;
}
export {VERSION as version};
