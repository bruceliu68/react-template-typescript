import React from 'react';
import { init } from "@rematch/core";
import * as models from "./models";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routes } from "./router";
import ErrorPage from "./pages/ErrorPage";

const store = init({
	models
});

const history = createBrowserHistory();

// const { dispatch } = store;
// window.dispatch = dispatch;

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					{
						routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								component={route.component}
								exact={route.exact}
							/>
						))
					}
					<Route component={ErrorPage} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
