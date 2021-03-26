import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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
						<div className="card" key={index}>
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

								<Link to={"/plaDet/" + index}>
									<button className="btn btn-primary">Aprender Mas!</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
