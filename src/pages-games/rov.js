import React, { useState } from "react";
import "./rov.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import videoBg from "../images/Halloween.mp4";
import { Form, Button } from "react-bootstrap";
import counpon1 from "../rov-coupon/coupon1.mp4";
import counpon2 from "../rov-coupon/coupon2.mp4";
import counpon3 from "../rov-coupon/coupon3.mp4";
import counpon4 from "../rov-coupon/coupon4.mp4";
import counpon5 from "../rov-coupon/coupon5.mp4";
import counpon6 from "../rov-coupon/coupon6.mp4";
import counpon7 from "../rov-coupon/coupon7.mp4";
import counpon8 from "../rov-coupon/coupon8.mp4";
import counpon9 from "../rov-coupon/coupon9.mp4";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Rov = () => {
	const [clickedIndex, setClickedIndex] = useState(null);
	const [totalPrice, setTotalPrice] = useState(0);
	const [userID, setuserID] = useState("");
	const [userPass, setuserPass] = useState("");
	const history = useHistory();
	const handleImageClick = (index, price) => {
		if (index === clickedIndex) {
			setClickedIndex(null);
			setTotalPrice(0);
		} else {
			setClickedIndex(index);
			setTotalPrice(price);
		}
	};

	const videos = [
		{ src: counpon1, text: "40.00" },
		{ src: counpon2, text: "72.00" },
		{ src: counpon3, text: "120.00" },
		{ src: counpon4, text: "225.00" },
		{ src: counpon5, text: "375.00" },
		{ src: counpon6, text: "700.00" },
		{ src: counpon7, text: "1,050.00" },
		{ src: counpon8, text: "1,400.00" },
		{ src: counpon9, text: "2,100.00" },
	];
	const handlePurchaseConfirmation = () => {
		const navigateToProfile = () => {
			setTimeout(() => {
				history.push("/profile");
			}, 1000); // หน่วงเวลา 1 วินาที
		};
		const loggedInUsername = localStorage.getItem("username");
		if (loggedInUsername) {
			if (
				loggedInUsername !== null &&
				totalPrice > 0 &&
				userID !== "" &&
				userPass !== ""
			) {
				axios
					.post("http://localhost:3001/deductMoney", {
						username: loggedInUsername,
						amount: totalPrice,
					})
					.then((response) => {
						Swal.fire({
							icon: "success",
							title: response.data,
							text: "คูปองเข้าเกมแล้ว",
						});
						navigateToProfile();
					})
					.catch((error) => {
						console.error(error);
						Swal.fire({
							icon: "error",
							title: "ผิดพลาด",
							text: "จำนวนเงินของคุณไม่พอกรุณาเติมเงินเพิ่ม",
						});
					});
			} else {
				if (userID == "") {
					Swal.fire({
						icon: "error",
						title: "ผิดพลาด",
						text: "กรุณากรอก ID ",
					});
				} else if (userPass == "") {
					Swal.fire({
						icon: "error",
						title: "ผิดพลาด",
						text: "กรุณากรอก Password ",
					});
				} else if (totalPrice == "") {
					Swal.fire({
						icon: "error",
						title: "ผิดพลาด",
						text: "กรุณาเลือกจำนวนที่ต้องการซื้อ",
					});
				}
			}
		} else if (!loggedInUsername) {
			Swal.fire({
				icon: "error",
				title: "ผิดพลาด",
				text: "กรุณาล็อคอิน ",
			});
			history.push("/login");
		}
	};
	return (
		<div className="valorantScreen">
			<video autoPlay loop muted className="video-bg">
				<source src={videoBg} type="video/mp4" />
			</video>
			<h2 className="form-section__circle" data-aos="fade-up">
				<span className="form-section__number">1</span>
				<span className="form-section__name">กรุณากรอก ID+PASSWORD</span>
			</h2>
			<div
				className="valorantContainer"
				style={{ flexDirection: "column" }}
				data-aos="fade-up"
				data-aos-delay="0">
				<div style={{ marginLeft: "2rem", marginTop: "10px" }}>
					<Form.Group className="margin-btroblox">
						<Form.Control
							type="text"
							name="username"
							placeholder="กรุณากรอก ID"
							className="rovInput"
							onChange={(event) => {
								setuserID(event.target.value);
							}}
						/>
					</Form.Group>
				</div>
				<div className="rov-input2">
					<Form.Group className="margin-btroblox">
						<Form.Control
							type="text"
							name="username"
							placeholder="กรุณากรอก Password"
							className="rovInput"
							onChange={(event) => {
								setuserPass(event.target.value);
							}}
						/>
					</Form.Group>
				</div>
				<p className="form-section__instructionrov">
					* กรุณาเปลี่ยนรหัสทุกครั้งหลังใช้บริการเสร็จ
					เพื่อความสบายใจของลูกค้าและทางร้าน
				</p>
			</div>

			<h2
				className="form-section__circle margin-item"
				data-aos="fade-up"
				data-aos-delay="100">
				<span className="form-section__number">2</span>
				<span className="form-section__name">เลือกจำนวนที่ต้องการเติม</span>
			</h2>

			<div
				className="valorantContainer"
				data-aos="fade-up"
				data-aos-delay="100">
				{videos.map((video, index) => (
					<div
						key={index}
						className={`image-boxApex ${
							index === clickedIndex ? "clicked" : ""
						}`}
						onClick={() =>
							handleImageClick(index, video.text.replace(",", ""))
						}>
						<video autoPlay loop muted width="300" height="200">
							<source src={video.src} type="video/mp4" />
						</video>
						<p>฿{video.text}</p>
					</div>
				))}
			</div>

			<h2 className="form-section__circle margin-item">
				<span className="form-section__number">3</span>
				<span className="form-section__name">ยืนยันคำสั่งซื้อ</span>
			</h2>

			<div className="checkboxValo">
				<p className="price-valo">รวมทั้งสิ้น : ฿{totalPrice} บาท</p>
				<Button
					className="button button-valo"
					type="button"
					onClick={handlePurchaseConfirmation}>
					<FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 5 }} />{" "}
					ยืนยันคำสั่งซื้อ
				</Button>
			</div>
		</div>
	);
};

export default Rov;
