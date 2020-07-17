import React from "react";
import "./Charity.css";

export function Charity({ children }) {
	return (
		<div className="list-overflow-container">
			<ul className="list-group">{children}</ul>
		</div>
	);
}

export function CharityItem({ children }) {
	return <li className="list-group-item">{children}</li>;
}
