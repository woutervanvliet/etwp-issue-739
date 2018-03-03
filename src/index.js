import './no-module.css';

import('./dynamic').then(({ init }) => {
	init();
});
