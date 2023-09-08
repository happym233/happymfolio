import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { TECH, findTech } from "../../assets/techs";

import "./styles/project.css";

const Project = (props) => {
	const navigate = useNavigate();
	const { logo, techStacks, title, description, link, githubLink } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link ? link : githubLink}>
					<div className="project-container">
						<div className="before-link-container">
							<div className="project-logo-container">
								<div className="project-logo">
									<img src={logo} alt={title} />
								</div>
							</div>
							<div className="project-title">{title}</div>
							<div className="project-techs">
								{techStacks
									.map((stack) => findTech(stack))
									.map((stack, idx) => (
										<div className="project-tech" key={idx}>
											<img
												src={stack.url}
												alt={stack.name}
											/>
										</div>
									))}
							</div>
							<div className="project-description">
								{description}
							</div>
						</div>
						<div className="project-link-container">
							{link && (
								<div
									className={"project-link hover-green"}
									onClick={(e) => {
										e.preventDefault();
										window.location.href = link;
										return null;
									}}
								>
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>

									<div className="project-link-text">
										View Demo
									</div>
								</div>
							)}
							{githubLink && (
								<div
									className={"project-github-link"}
									onClick={(e) => {
										e.preventDefault();
										window.location.href = githubLink;
										return null;
									}}
								>
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>

									<div className="project-link-text">
										View Github
									</div>
								</div>
							)}
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
