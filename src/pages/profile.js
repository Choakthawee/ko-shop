import videoBg from "../images/Halloween.mp4";
import React, { useState, useEffect } from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
const Profile = () => {
	const username = localStorage.getItem("username");
	const [user, setUser] = useState({});
	const history = useHistory();
	const navigateToProfile = () => {
		setTimeout(() => {
			history.push("/login");
		}, 1000); // หน่วงเวลา 1 วินาที
	};
	const handleLogout = () => {
		Swal.fire({
			title: "คุณแน่ใจหรือไม่ที่ต้องการออกจากระบบ?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "ใช่, ออกจากระบบ",
		}).then((result) => {
			if (result.isConfirmed) {
				localStorage.clear();
				navigateToProfile();
			}
		});
	};

	useEffect(() => {
		axios
			.get(`http://localhost:3001/user_info?username=${username}`)
			.then((response) => {
				setUser(response.data);
			})
			.catch((error) => {
				console.error("มีข้อผิดพลาดในการดึงข้อมูล:", error);
			});
	}, [username, setUser]);
	return (
		<div className="Profile-Screen">
			<video autoPlay loop muted className="video-bg">
				<source src={videoBg} type="video/mp4" />
			</video>
			<div className="loginbg" data-aos="fade-up" data-aos-delay="0">
				<h1 className="fontLogin">โปรไฟล์</h1>
				<div className="line-3"></div>

				<div className="profile-div">
					<h2 className="const-div font-sizehead">
						ยินดีต้อนรับคุณ, {username}
					</h2>
					<div style={{ justifyContent: "flex-starts", marginBottom: "10px" }}>
						<h3 className="const-div">
							<p className="font-sizehead">ชื่อผู้ใช้งาน :</p>
							<span className="username-font">{username}</span>
						</h3>
						<h3 className="const-div">
							<p className="font-sizehead">ยอดเงินคงเหลือ :</p>
							<span className="username-font">
								{user.money} บาท
								<Link to="/topup">
									<FontAwesomeIcon icon={faPlusCircle} className="iconstyle" />
								</Link>
							</span>
						</h3>
						<h3 className="const-email">
							<p className="font-sizehead">อีเมลล์ :</p>
							<span className="email-font">{user.email}</span>
						</h3>
					</div>
					<Button
						className="button buttonprofile"
						type="button"
						onClick={handleLogout}>
						<FontAwesomeIcon icon={faSignOut} style={{ marginRight: 5 }} />{" "}
						ล๊อคเอ้าท์
					</Button>
				</div>

				<div className="line-3"></div>
			</div>
		</div>
	);
};

export default Profile;
