import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/card.css";

const CardContainer = (props) => {
	const { icon, title, body } = props;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// REVEAL //
		gsap.utils.toArray(".revealUp").forEach(function (elem) {
			ScrollTrigger.create({
				trigger: elem,
				start: "top 80%",
				end: "bottom 20%",
				onEnter: function () {
					gsap.fromTo(
						elem,
						{ y: 20, autoAlpha: 0 },
						{
							duration: 1.25,
							y: 0,
							autoAlpha: 1,
							ease: "back",
							overwrite: "auto",
						}
					);
				},
				onLeave: function () {
					gsap.fromTo(
						elem,
						{ autoAlpha: 1 },
						{ autoAlpha: 0, overwrite: "auto" }
					);
				},
				onEnterBack: function () {
					gsap.fromTo(
						elem,
						{ y: -20, autoAlpha: 0 },
						{
							duration: 1.25,
							y: 0,
							autoAlpha: 1,
							ease: "back",
							overwrite: "auto",
						}
					);
				},
				onLeaveBack: function () {
					gsap.fromTo(
						elem,
						{ autoAlpha: 1 },
						{ autoAlpha: 0, overwrite: "auto" }
					);
				},
			});
		});
	}, []);

	return (
		<div className="contain">
			<div className="contain-container">
				<div className="card-header revealUp">
					<div className="contain-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="contain-title">{title}</div>
				</div>
				<div className="card-body">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default CardContainer;
