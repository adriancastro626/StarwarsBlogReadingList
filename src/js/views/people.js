import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="mt-3 text-center text-light">PERSONAJES</h1>
			<div className="card-columns">
				{store.people.map((item, index) => {
					return (
						<div className="card" key={index} style={{ width: 18 + "rem" }}>
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
								<div className="row">
									<div className="col">
										<Link to={"/pepDet/" + index}>
											<button className="btn btn-primary">Mas!</button>
										</Link>
									</div>
									<div className="col text-right">
										<button
											onClick={() => {
												actions.addCharacterFavorite(index);
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
