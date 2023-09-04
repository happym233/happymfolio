import React from "react";

import Project from "./project";
import FullWidthProject from "./fullWidthProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContainer from "../common/cardContainer";
import { faLink, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<CardContainer
			icon={faLaptopCode}
			title="Projects"
			body={
				<>
					<div className="all-projects-container">
						{INFO.projects.map((project, index) => (
							<div className="all-projects-project" key={index}>
								<Project
									logo={project.logo}
									title={project.title}
									description={project.description}
									linkText={project.linkText}
									link={project.link}
								/>
							</div>
						))}
					</div>
					<div style={{ display: "none" }}>
						{INFO.projects.map((project, index) => (
							<div key={index}>
								<FullWidthProject
									logo={project.logo}
									title={project.title}
									description={project.description}
									linkText={project.linkText}
									link={project.link}
								/>
							</div>
						))}
					</div>
				</>
			}
		/>
	);
};

export default AllProjects;
