import './extensions';

var VERSION = VERSION;
if (!VERSION) {
    let pkg = require('../package.json');
    VERSION = pkg.version;
}

var pce = {version: VERSION};
Object.assign(pce,
    require('./modules').default,
    require('./utils').default,
);

export default pce;
