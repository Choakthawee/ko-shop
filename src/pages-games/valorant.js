import React, { useState } from "react";
import "./valorant.css";
import { Form, Button } from "react-bootstrap";
import vp540 from "../valorant-points/540.mp4";
import vp1130 from "../valorant-points/1130.mp4";
import vp1945 from "../valorant-points/1945.mp4";
import vp3930 from "../valorant-points/3930.mp4";
import vp5550 from "../valorant-points/5550.mp4";
import vp11500 from "../valorant-points/11500.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import videoBg from "../images/Halloween.mp4";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Valorant = () => {
	const [clickedIndex, setClickedIndex] = useState(null);
	const [totalPrice, setTotalPrice] = useState(0);
	const [userID, setuserID] = useState("");
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
		{ src: vp540, text: "150.00" },
		{ src: vp1130, text: "300.00" },
		{ src: vp1945, text: "500.00" },
		{ src: vp3930, text: "1,000.00" },
		{ src: vp5550, text: "1,400.00" },
		{ src: vp11500, text: "2,800.00" },
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
				userID.includes("#") &&
				userID.length >= 3
			) {
				let uid;
				let tagid;
				[uid, tagid] = userID.split("#");
				if (uid.length < 3 || tagid.length < 3) {
					Swal.fire({
						icon: "error",
						title: "ผิดพลาด",
						text: "กรุณากรอกหน้าและหลัง # อย่างต่ำ 3 ตัวอักษร",
					});
				} else {
					axios
						.post("http://localhost:3001/deductMoney", {
							username: loggedInUsername,
							amount: totalPrice,
						})
						.then((response) => {
							Swal.fire({
								icon: "success",
								title: response.data,
								text: "พ้อยเข้าเกมแล้ว",
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
				}
			} else {
				if (!userID.includes("#") || !userID.length < 3) {
					Swal.fire({
						icon: "error",
						title: "ผิดพลาด",
						text: "กรุณากรอก ID ",
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
				<span className="form-section__name">กรุณากรอก RiotID</span>
			</h2>
			<div
				className="valorantContainerText"
				data-aos="fade-up"
				data-aos-delay="0">
				<div style={{ marginLeft: "2rem", marginTop: "10px" }}>
					<Form.Group className="margin-btroblox">
						<Form.Control
							type="text"
							name="username"
							placeholder="กรุณากรอก Riot ID"
							className="valoInput"
							onChange={(event) => {
								setuserID(event.target.value);
							}}
						/>
					</Form.Group>
				</div>
				<p className="form-section__instruction">
					* หากต้องการหา Riot ID กรุณาเข้าไปที่หน้าโปรไฟล์ของคุณและก็อปปี้ Riot
					ID + Tag ด้วยปุ่มข้าง Riot ID ของคุณ (ตัวอย่าง: Westbourne#SEA)
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

export default Valorant;
