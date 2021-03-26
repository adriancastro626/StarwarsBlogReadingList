import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="mt-3">PERSONAS</h1>
			<div className="card-colums m-5 animated fadeIn">
				{store.people.map((item, index) => {
					return (
						<div key={index} className="card">
							<img
								className="card-img-top"
								src="https://es.gamewallpapers.com/download.php?img=wallpaper_star_wars_-_battlefront_2_01_1920x1080.jpg"
								alt="card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span className="d-block">Nombre: {item.name}</span>
									<span className="d-block">Genero: {item.gender}</span>
									<span className="d-block">Color Cabello: {item.hair_color}</span>
									<span className="d-block">Color de Ojos: {item.eye_color}</span>
								</p>

								<Link to={"/people/" + index}>
									<button onClick={() => actions.addPeopleFav(index)} className="btn btn-primary">
										Aprender Mas!
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
