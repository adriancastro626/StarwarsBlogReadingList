import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="rounded mx-auto d-block img-fluid"
							src="https://flozzontherocks.files.wordpress.com/2019/05/star-wars.jpg"
							alt="First slide"
							width="1200px"
							height="900px"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="rounded mx-auto d-block img-fluid"
							src="https://wallpaperaccess.com/full/11793.jpg"
							alt="Second slide"
							width="1200px"
							height="900px"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="rounded mx-auto d-block img-fluid"
							src="https://i.pinimg.com/originals/52/43/1e/52431ee9ea44782db468d854c1565106.png"
							alt="Third slide"
							width="1200px"
							height="900px"
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</>
	);
};
