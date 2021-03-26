import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PerInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const personaje = store.people[params.id];

	return (
		<div className="container">
			<>
				<div className="row">
					<div className="col">
						<img
							className="card-img-top"
							src="https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/F5WLPTN4WBFAPIWQOLLVAV6TEM.jpg"
							alt="Card image cap"
						/>
					</div>
					<div className="col text-center text-light">
						<h1 className="display-4">{store.people[params.id].name}</h1>
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
						<span className="d-block">{personaje.name}</span>
					</div>
					<div className="col text-center text-light">
						<span className="d-block">Birth Year:</span>
						<span className="d-block">{personaje.birth_year}</span>
					</div>
					<div className="col text-center text-light">
						<span className="d-block">Gender:</span>
						<span className="d-block">{personaje.gender}</span>
					</div>

					<div className="col text-light">
						<span className="d-block text-light">Height:</span>
						<span className="d-block">{personaje.height}</span>
					</div>
					<div className="col text-light">
						<span className="d-block">Skin Color:</span>
						<span className="d-block">{personaje.skin_color}</span>
					</div>
					<div className="col text-light">
						<span className="d-block">Eyes color:</span>
						<span className="d-block">{personaje.eye_color}</span>
					</div>
				</div>
			</>

			<div className="container mt-3">
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

PerInfo.propTypes = {
	match: PropTypes.object
};
