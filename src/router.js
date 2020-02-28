import Loadable from '@loadable/component';

export const routes = [
	{
		path: "/",
		component: Loadable(() => import('./pages/Home')),
		exact: true
	},
	{
		path: "/about",
		component: Loadable(() => import('./pages/About')),
	},
];
