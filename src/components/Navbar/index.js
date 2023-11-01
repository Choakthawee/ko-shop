import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserPlus,
	faUser,
	faCartShopping,
	faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

import "./index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [loggedInUsername, setLoggedInUsername] = useState(
		localStorage.getItem("username")
	);
	const location = useLocation();
	const handleStorageChange = () => {
		setLoggedInUsername(localStorage.getItem("username"));
	};

	useEffect(() => {
		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	useEffect(() => {
		setLoggedInUsername(localStorage.getItem("username"));
	}, [location]);

	return (
		<nav>
			<NavLink to="/">
				<img
					src={require("../../images/logo.png")}
					alt="logo"
					className="Logo"
				/>
			</NavLink>
			<div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={menuOpen ? "open" : ""}>
				<li>
					<NavLink to="/allitem">
						<FontAwesomeIcon icon={faCartShopping} style={{ marginRight: 5 }} />{" "}
						หมวดหมู่สินค้าทั้งหมด
					</NavLink>
				</li>
				<li>
					<NavLink to="/topup">
						<FontAwesomeIcon icon={faCirclePlus} style={{ marginRight: 5 }} />{" "}
						เติมเงิน
					</NavLink>
				</li>
				{loggedInUsername ? (
					<li>
						<NavLink to="/profile">
							<FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} />{" "}
							โปรไฟล์
						</NavLink>
					</li>
				) : (
					<>
						<li>
							<NavLink to="/register">
								<FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} />{" "}
								สมัครสมาชิก
							</NavLink>
						</li>
						<li>
							<NavLink to="/login">
								<FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} />{" "}
								เข้าสู่ระบบ
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
