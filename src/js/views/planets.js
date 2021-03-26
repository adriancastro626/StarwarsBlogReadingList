import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="mt-3 text-center text-light">PLANETAS</h1>
			<div className="card-columns">
				{store.planets.map((item, index) => {
					return (
						<div className="card" key={index} style={{ width: 18 + "rem" }}>
							<img
								className="card-img-top"
								src="https://exoplanets.nasa.gov/internal_resources/116"
								alt="card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span className="d-block">Nombre: {item.name}</span>
									<span className="d-block">Poblacion: {item.population}</span>
									<span className="d-block">Terreno: {item.terrain}</span>
								</p>
								<div className="row">
									<div className="col">
										<Link to={"/plaDet/" + index}>
											<button className="btn btn-primary">Mas!</button>
										</Link>
									</div>
									<div className="col text-right">
										<button
											onClick={() => {
												actions.addPlanetFavorite(index);
											}}
											className="btn btn-primary">
											<i className="bi bi-heart" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
