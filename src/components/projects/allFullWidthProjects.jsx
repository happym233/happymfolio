import React from "react";

import Project from "./project";
import FullWidthProject from "./fullWidthProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContainer from "../common/cardContainer";
import { faLink, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllFullWidthProjects = () => {
	return (
		<CardContainer
			icon={faLaptopCode}
			title="Projects"
			body={
				<>
					<div className="all-fullWidth-project-container">
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

export default AllFullWidthProjects;
