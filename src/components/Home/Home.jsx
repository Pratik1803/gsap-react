import { Button } from "@mui/material";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigator = useNavigate();
	const [reversed, setReversed] = useState(false);
	const l1 = useRef();
	const l2 = useRef();
	const l3 = useRef();
	const l4 = useRef();
	const l5 = useRef();
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.to(l3.current, { height: 0, duration: 0.5 }, "+=0.5")
			.to(l2.current, { height: 0, duration: 0.5 }, "-=0.2")
			.to(l4.current, { height: 0, duration: 0.5 }, "-=0.5")
			.to(l1.current, { height: 0, duration: 0.5 }, "-=0.2")
			.to(l5.current, { height: 0, duration: 0.5 }, "-=0.5");
	}, []);

	useEffect(() => {
		tl.current.reversed(reversed);
	}, [reversed]);

	return (
		<div className={Styles.home}>
			<h1>Home</h1>
			<div className={Styles.button_div}>
				<Button
					onClick={() => {
						setReversed(!reversed);
						setTimeout(() => {
							navigator("/about");
						}, 1100);
					}}
				>
					About
				</Button>
			</div>
			<div className={Styles.line1} ref={l1}></div>
			<div className={Styles.line2} ref={l2}></div>
			<div className={Styles.line3} ref={l3}></div>
			<div className={Styles.line4} ref={l4}></div>
			<div className={Styles.line5} ref={l5}></div>
		</div>
	);
}

export default Home;
