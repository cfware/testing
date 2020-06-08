import t from 'libtap';

import * as localModule from '@cfware/testing';

t.ok(localModule.default);
t.same(Object.keys(localModule), ['default']);
