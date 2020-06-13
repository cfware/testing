import t from 'libtap';

import * as localModule from '@cfware/testing';

t.equal(localModule.default, '3.0.1');
t.same(Object.keys(localModule), ['default']);
