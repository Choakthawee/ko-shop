import React from "react";
import "./truemoney.css";
import Truemoney from "../images/true-money.png";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import videoBg from "../images/Halloween.mp4";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Truemoneypay = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [amount, setAmount] = useState("");
	const history = useHistory();
	const navigateToProfile = () => {
		setTimeout(() => {
			history.push("/profile");
		}, 1000); // หน่วงเวลา 1 วินาที (1000 มิลลิวินาที)
	};
	const handleTopup = () => {
		const loggedInUsername = localStorage.getItem("username"); // Get username from Local Storage
		if (loggedInUsername) {
			if (phoneNumber.startsWith("0") && phoneNumber.length === 10) {
				if (!amount.startsWith("0") && amount != "") {
					axios
						.post("http://localhost:3001/topuptruemoney", {
							username: loggedInUsername,
							phoneNumber: phoneNumber,
							amount: amount,
						})
						.then((response) => {
							Swal.fire({
								icon: "success",
								title: "เติมเงินสำเร็จ",
								text: "ทรูมันนี่วอเล็ต",
							});
							navigateToProfile();
						})
						.catch((error) => {
							console.error(error);
							Swal.fire({
								icon: "error",
								title: "ผิดพลาด",
								text: "เกิดข้อผิดพลาดในการเติมเงิน โปรดลองอีกครั้ง",
							});
						});
				} else {
					Swal.fire({
						icon: "error",
						title: "ค่าเงินไม่ถูกต้อง",
						text: "โปรดใส่จำนวนเงินที่ต้องการเติม",
					});
				}
			} else {
				Swal.fire({
					icon: "error",
					title: "เบอร์โทรศัพท์ไม่ถูกต้อง",
					text: 'โปรดใส่หมายเลขโทรศัพท์ที่ขึ้นต้นด้วย "0" และมีความยาว 10 หลัก',
				});
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "ยังไม่ได้ Login",
				text: "กรุณาล็อคอิน",
			});
			history.push("/login");
		}
	};

	return (
		<div className="div-truemoney">
			<video autoPlay loop muted className="video-bg">
				<source src={videoBg} type="video/mp4" />
			</video>
			<div className="backgroundpay">
				<h1 className="topup" data-aos="fade-up" data-aos-delay="0">
					TRUEMONEY
				</h1>
				<h2 className="topup2" data-aos="fade-up" data-aos-delay="50">
					เงินสดทรูมันนี่
				</h2>
				<div className="boxtext" data-aos="fade-up" data-aos-delay="100">
					<img src={Truemoney} alt="truemoney" className="TruemoenyImg" />
					<Form>
						<Form.Group>
							<p className="Wallet"> กรอกเบอร์มือถือ</p>
							<Form.Control
								type="text"
								name="เติมเงิน"
								placeholder="กรุณากรอก เบอร์มือถือ"
								style={{
									borderRadius: "15px",
									borderWidth: "1px",
									textAlign: "center",
								}}
								onChange={(event) => setPhoneNumber(event.target.value)}
							/>
							<div className="Wallet">กรอกจำนวนเงินที่ต้องการเติม</div>
							<Form.Control
								type="text"
								name="เติมเงิน"
								placeholder="กรุณากรอก จำนวนเงิน"
								style={{
									borderRadius: "30px",
									borderWidth: "1px",
									textAlign: "center",
								}}
								onChange={(e) => setAmount(e.target.value)}
							/>

							<div className="setbutton">
								<Button
									className="truebutton btn-truemoney"
									type="button"
									onClick={handleTopup}>
									<FontAwesomeIcon icon={faSquareCheck} /> ยืนยันการเติมเงิน
								</Button>
							</div>
						</Form.Group>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Truemoneypay;
