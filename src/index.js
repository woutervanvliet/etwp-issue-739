// workaround for bug in ExtractTextPlugin
// eslint-disable-next-line import/first,import/no-extraneous-dependencies
import 'css-loader/lib/css-base';
import './no-module.css';

import('./dynamic').then(({ init }) => {
	init();
});
