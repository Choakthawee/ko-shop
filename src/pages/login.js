import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import videoBg from "../images/Halloween.mp4";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [dataList, setdataList] = useState("");
	const history = useHistory();
	const navigateToProfile = () => {
		setTimeout(() => {
			history.push("/profile");
		}, 1000); // หน่วงเวลา 1 วินาที
	};
	const login = () => {
		if (!username || !password) {
			Swal.fire({
				icon: "error",
				title: "ผิดพลาด",
				text: "กรุณากรอกข้อมูลให้ครบถ้วน",
			});
			return;
		}
		axios
			.post("http://localhost:3001/login", {
				username: username,
				password: password,
			})
			.then((response) => {
				if (response.status === 200) {
					setdataList({
						...dataList,
						username: username,
						password: password,
					});
					Swal.fire({
						icon: "success",
						title: "เข้าสู่ระบบสำเร็จ",
						text: "ยินดีต้อนรับ! คุณได้เข้าสู่ระบบแล้ว",
					});
					localStorage.setItem("username", username);
					navigateToProfile();
				} else {
					Swal.fire({
						icon: "error",
						title: "เข้าสู่ระบบล้มเหลว",
						text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
					});
				}
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "เข้าสู่ระบบล้มเหลว",
					text: "กรุณาสมัครมาชิก",
				});
			});
	};

	return (
		<div className="loginScreen">
			<video autoPlay loop muted className="video-bg">
				<source src={videoBg} type="video/mp4" />
			</video>
			<div className="loginbg" data-aos="fade-up" data-aos-delay="0">
				<h1 className="fontLogin">เข้าสู่ระบบ</h1>
				<div className="line-3"></div>
				<div className="bg-display-login">
					<Form>
						<Form.Group className="margin-lg">
							<Form.Label className="form-login-label">Username</Form.Label>
							<Form.Control
								type="text"
								name="username"
								placeholder="กรุณากรอก username"
								onChange={(event) => {
									setUsername(event.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className="margin-lg">
							<Form.Label className="form-login-label">Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="กรุณากรอก password"
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
						</Form.Group>
					</Form>
				</div>

				<div className="div-btnreg">
					<Button
						className="button button-register"
						type="button"
						onClick={login}>
						<FontAwesomeIcon icon={faSignInAlt} className="margin-iconlg" />{" "}
						เข้าสู่ระบบ
					</Button>

					<Link to="/register">
						<Button className="button button-back" type="button">
							<FontAwesomeIcon icon={faUserPlus} className="margin-iconlg" />{" "}
							สมัครสมาชิก
						</Button>
					</Link>
				</div>

				<div className="line-3"></div>
			</div>
		</div>
	);
};

export default Login;
