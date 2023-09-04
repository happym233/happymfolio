import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CardContainer from "../common/cardContainer";

import "./styles/works.css";

import { WorkIcon, SchoolIcon, StarIcon } from "../../assets/icons";

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
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "var(--quaternary-color)",
								}}
								contentArrowStyle={{
									borderRight:
										"7px solid var(--quaternary-color)",
								}}
								date="2011 - present"
								iconStyle={{
									background: "#fff",
									color: "#fff",
									marginLeft: -20,
									width: 40,
									height: 40,
								}}
								icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Creative Director
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Miami, FL
								</h4>
								<p>
									Creative Direction, User Experience, Visual
									Design, Project Management, Team Leading
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="April 2013"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Content Marketing for Web, Mobile and Social
									Media
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Online Course
								</h4>
								<p>Strategy, Social Media</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="November 2012"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Agile Development Scrum Master
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Certification
								</h4>
								<p>
									Creative Direction, User Experience, Visual
									Design
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="2002 - 2006"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Bachelor of Science in Interactive Digital
									Media Visual Imaging
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Bachelor Degree
								</h4>
								<p>Creative Direction, Visual Design</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								iconStyle={{
									background: "rgb(16, 204, 82)",
									color: "#fff",
								}}
								icon={<StarIcon />}
							/>
						</VerticalTimeline>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
