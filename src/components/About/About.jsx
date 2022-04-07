import { Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Styles from "./About.module.scss";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function About() {
	const navigator = useNavigate();
	const [reversed, setReversed] = useState(false);
	const l1 = useRef();
	const l2 = useRef();
	const l3 = useRef();
	const l4 = useRef();
	const l5 = useRef();
	const tl2 = useRef();
  
	useEffect(() => {
      tl2.current = gsap
			.timeline()
			.to(l3.current, { height: 0, duration: 0.5 }, "+=0.5")
			.to(l2.current, { height: 0, duration: 0.5 }, "-=0.2")
			.to(l4.current, { height: 0, duration: 0.5 }, "-=0.5")
			.to(l1.current, { height: 0, duration: 0.5 }, "-=0.2")
			.to(l5.current, { height: 0, duration: 0.5 }, "-=0.5");
	}, []);

	useEffect(() => {
		tl2.current.reversed(reversed);
	}, [reversed]);
	return (
		<div className={Styles.about}>
			<h1>About</h1>
			<div className={Styles.button_div}>
				<Button onClick={()=>{
                setReversed(!reversed);
                setTimeout(() => {
                    navigator("/")
                }, 1100);
            }}>Home</Button>
			</div>
			<div className={Styles.line1} ref={l1}></div>
			<div className={Styles.line2} ref={l2}></div>
			<div className={Styles.line3} ref={l3}></div>
			<div className={Styles.line4} ref={l4}></div>
			<div className={Styles.line5} ref={l5}></div>
		</div>
	);
}

export default About;
