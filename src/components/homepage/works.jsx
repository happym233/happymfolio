import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CardContainer from "../common/cardContainer";
import Card from "../common/card";

import "./styles/works.css";
import "./styles/timeline.css";

import { ExpIcon } from "../../assets/icons";

import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<CardContainer
				icon={faBriefcase}
				title="Exprience"
				body={
					<div className="works-body">
						{/*
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
				*/}

						<VerticalTimeline lineColor={"var(--tertiary-color)"}>
							{INFO.experiences.map((experience, idx) => (
								<VerticalTimelineElement
									key={idx}
									className="vertical-timeline-element--work"
									contentStyle={{
										background: "#fafafa",
									}}
									contentArrowStyle={{
										borderRight: "7px solid #fafafa",
									}}
									date={experience.date}
									iconStyle={{
										background: "#fff",
										color: "#fff",
										marginLeft: -20,
										width: 40,
										height: 40,
									}}
									icon={
										<ExpIcon
											logo={experience.logo}
											name={experience.title}
										/>
									}
								>
									<h3 className="vertical-timeline-element-title">
										{experience.title}
									</h3>
									<h4 className="vertical-timeline-element-subtitle">
										{experience.place}
									</h4>
									<hr />
									<ul className="timeline-ul">
										{experience.description.map(
											(des, idx) => (
												<li key={idx}>{des}</li>
											)
										)}
									</ul>
								</VerticalTimelineElement>
							))}
						</VerticalTimeline>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
