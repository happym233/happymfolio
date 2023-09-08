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
						{INFO.projects
							.filter((project) => project.show)
							.map((project, index) => (
								<div
									className="all-projects-project"
									key={index}
								>
									<Project
										logo={project.logo}
										techStacks={project.techStacks}
										title={project.title}
										description={project.description}
										linkText={project.linkText}
										link={project.link}
										githubLink={project.githubLink}
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
