import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/people";
import { Planets } from "./views/planets";
import { PerInfo } from "./views/pepDet";
import { PlaInfo } from "./views/plaDet";
import { Login } from "./views/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column" id="#body">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login/">
							<Login />
						</Route>
						<Route exact path="/people/">
							<People />
						</Route>
						<Route exact path="/pepDet/:id">
							<PerInfo />
						</Route>
						<Route exact path="/planets/">
							<Planets />
						</Route>
						<Route exact path="/plaDet/:id">
							<PlaInfo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
