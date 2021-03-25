import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.people.length > 0 ? (
				store.people.map((item, index) => {
					<div className="card" key={index} style={{ width: 18 + "rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
							<span className="card-text">{item.gender}</span>
							<span className="card-text">{item.hair_color}</span>
							<span className="card-text">{item.eye_color}</span>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>;
				})
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};
