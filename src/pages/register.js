import React from "react";
import { useState } from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faBackward } from "@fortawesome/free-solid-svg-icons";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import videoBg from "../images/Halloween.mp4";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmpassword] = useState("");
	const [email, setEmail] = useState("");
	const [userList, setUser] = useState([]);

	const history = useHistory();

	const navigateToProfile = () => {
		setTimeout(() => {
			history.push("/login");
		}, 1000); // หน่วงเวลา 1 วินาที
	};
	const addregister = () => {
		if (!username || !password || !confirmpassword || !email) {
			Swal.fire({
				icon: "error",
				title: "ผิดพลาด",
				text: "กรุณากรอกข้อมูลให้ครบถ้วน",
			});
			return;
		}

		if (password.length < 8 || password.length > 20) {
			Swal.fire({
				icon: "error",
				title: "ผิดพลาด",
				text: "รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร",
			});
			return;
		}

		if (password !== confirmpassword) {
			Swal.fire({
				icon: "error",
				title: "ผิดพลาด",
				text: "รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน",
			});
			return;
		}

		if (!email.includes("@")) {
			Swal.fire({
				icon: "error",
				title: "ผิดพลาด",
				text: "อีเมลไม่ถูกต้อง",
			});
			return;
		}
		axios
			.post("http://localhost:3001/create", {
				username: username,
				password: password,
				confirmpassword: confirmpassword,
				email: email,
			})
			.then((response) => {
				setUser({
					...userList,
					username: username,
					password: password,
					confirmpassword: confirmpassword,
					email: email,
				});
				Swal.fire({
					icon: "success",
					title: "สมัครสมาชิกสำเร็จ",
					text: "ยินดีต้อนรับ! คุณได้สมัครสมาชิกแล้ว",
				});
				navigateToProfile();
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "สมัครสมาชิกล้มเหลว",
					text: "กรุณาสมัครสมาชิกอีกรอบ",
				});
			});
	};

	return (
		<div className="registerScreen">
			<video autoPlay loop muted className="video-bg">
				<source src={videoBg} type="video/mp4" />
			</video>
			<div className="registerbg" data-aos="fade-up" data-aos-delay="0">
				<h1 className="fontRegister">สมัครสมาชิก</h1>
				<div className="line-3"></div>

				<div className="div-formreg">
					<Form>
						<Form.Group className="margin-form">
							<Form.Label className="style-color">Username</Form.Label>
							<Form.Control
								type="text"
								name="username"
								placeholder="กรุณากรอก username"
								onChange={(event) => {
									setUsername(event.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className="margin-form">
							<Form.Label className="style-color">Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="กรุณากรอก password"
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className="margin-form">
							<Form.Label className="style-color">Confirm Password</Form.Label>
							<Form.Control
								type="password"
								name="confirmPassword"
								placeholder="กรุณากรอก confirm password"
								onChange={(event) => {
									setConfirmpassword(event.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className="margin-form">
							<Form.Label className="style-color">Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="กรุณากรอก email"
								onChange={(event) => {
									setEmail(event.target.value);
								}}
							/>
						</Form.Group>
					</Form>
				</div>

				<div className="div-btnreg">
					<Button
						className="button button-register"
						type="button"
						onClick={addregister}>
						<FontAwesomeIcon icon={faUserPlus} className="margin-icon" />{" "}
						สมัครสมาชิก
					</Button>

					<Link to="/allitem">
						<Button className="button button-back" type="button">
							<FontAwesomeIcon icon={faBackward} className="margin-icon" />{" "}
							กลับสู่หน้าหลัก
						</Button>
					</Link>
				</div>

				<div className="line-3"></div>
			</div>
		</div>
	);
};

export default Register;
