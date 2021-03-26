import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlaInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const planeta = store.planets[params.id];

	return (
		<div className="container">
			<>
				<div className="row">
					<div className="col">
						<img
							className="card-img-top"
							src="https://www.wallpapertip.com/wmimgs/26-264661_planet-explosion-star-wars.jpg"
							alt="Card image cap"
						/>
					</div>
					<div className="col text-center text-light">
						<h1 className="display-4">{planeta.name}</h1>
						<p>
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using
						</p>
					</div>
				</div>

				<hr />

				<div className="row">
					<div className="col text-center text-light">
						<span className="d-block">Name:</span>
						<span className="d-block">{planeta.name}</span>
					</div>
					<div className="col text-center text-light">
						<span className="d-block">Poblacion:</span>
						<span className="d-block">{planeta.population}</span>
					</div>
					<div className="col text-center text-light">
						<span className="d-block">Terreno:</span>
						<span className="d-block">{planeta.terrain}</span>
					</div>
				</div>
			</>

			<div className="container mt-3">
				<Link to="/planets/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Planetas
					</span>
				</Link>
			</div>
		</div>
	);
};

PlaInfo.propTypes = {
	match: PropTypes.object
};
