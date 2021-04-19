import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { email, setEmail } = useState("");
	const { password, setPassword } = useState("");

	const handleClick = () => {
		fetch("https://3000-azure-tapir-by7vtmk5.ws-us03.gitpod.io/token");
	};

	return (
		<form className="dropdown-menu p-4">
			<div className="form-group">
				<label htmlFor="exampleDropdownFormEmail2">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleDropdownFormEmail2"
					placeholder="email@example.com"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleDropdownFormPassword2">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleDropdownFormPassword2"
					placeholder="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div className="form-check">
				<input type="checkbox" className="form-check-input" id="dropdownCheck2" />
				<label className="form-check-label" htmlFor="dropdownCheck2">
					Remember me
				</label>
			</div>
			<button type="submit" className="btn btn-primary" onClick={handleClick}>
				Sign in
			</button>
		</form>
	);
};
