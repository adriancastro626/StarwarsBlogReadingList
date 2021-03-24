import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<div className="card columns">
				<div className="" />
				<Link to="/">
					<button className="btn btn-primary">Back Home</button>
				</Link>
			</div>
		</div>
	);
};
