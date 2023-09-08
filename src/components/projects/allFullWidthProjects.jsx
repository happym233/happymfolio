import React, { useEffect, useState } from "react";

import Project from "./project";
import FullWidthProject from "./fullWidthProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContainer from "../common/cardContainer";
import { faLink, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllFullWidthProjects = (props) => {
	const [projects, setProjects] = useState(INFO.projects);
	const { tech } = props;

	useEffect(() => {
		if (tech) {
			setProjects(
				INFO.projects.filter(
					(project) =>
						project.techStacks
							.map((tech) => tech.toLowerCase())
							.indexOf(tech.toLowerCase()) >= 0 ||
						project.notShowTechStacks
							.map((tech) => tech.toLowerCase())
							.indexOf(tech.toLowerCase()) >= 0
				)
			);
		} else {
			setProjects(INFO.projects);
		}
	}, [tech]);

	return (
		<CardContainer
			icon={faLaptopCode}
			title="Projects"
			body={
				<>
					<div className="all-fullWidth-project-container">
						{projects.map((project, index) => (
							<div key={index}>
								<FullWidthProject
									date={project.date}
									techStacks={project.techStacks}
									logo={project.logo}
									title={project.title}
									description={project.description}
									descriptions={project.detailedDescriptions}
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

export default AllFullWidthProjects;
