import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
	const location = useLocation();

	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link
					to="/"
					className={location.pathname === "/" ? "nav-link active" : "nav-link"}
				>
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/HivePublic"
					className={
						location.pathname === "/HivePublic" ? "nav-link active" : "nav-link"
					}
				>
					Hive
				</Link>
			</li>
		</ul>
	);
}

export default NavTabs;
