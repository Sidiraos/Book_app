import React from 'react';
import logo from '../assets/logo/book_logo.jpg';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand logo" to="/">
					<img src={logo} alt="logo of a book" />
				</Link>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<NavLink
							className="nav-link"
							aria-current="page"
							to="/"
						>
							Home
						</NavLink>
						<NavLink className="nav-link" to="/search">
							Search
						</NavLink>
						<NavLink className="nav-link" to="/shelves">
							Shelves
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
