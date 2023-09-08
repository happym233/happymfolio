import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { TECH, findTech } from "../../assets/techs";

import "./styles/fullWidthProject.css";

const FullWidthProject = (props) => {
	const {
		date,
		logo,
		title,
		techStacks,
		description,
		descriptions,
		link,
		githubLink,
	} = props;

	return (
		<React.Fragment>
			<div className="full-width-project">
				<div className="full-project">
					<Link to={link ? link : githubLink}>
						<div className="full-width-project-container">
							<div className="full-width-project-image">
								<div className="full-width-project-image-container">
									<img src={logo} alt={title} />
								</div>
							</div>
							<div className="full-width-project-left-side">
								<div className="full-width-project-date">
									|&nbsp;&nbsp;&nbsp;{date}
								</div>
							</div>
							<div className="full-width-project-title">
								{title}
							</div>
							<div className="full-width-project-techstacks">
								{techStacks
									.map((stack) => findTech(stack))
									.map((stack, idx) => (
										<div
											className="full-width-project-tech"
											key={idx}
										>
											<img
												src={stack.url}
												alt={stack.name}
											/>
										</div>
									))}
							</div>
							<div className="full-width-project-description">
								<div className="full-width-project-description-text">
									{description}
								</div>
								<ul>
									{descriptions.map((des, index) => (
										<li key={index}>{des}</li>
									))}
								</ul>
							</div>
						</div>
						<div className="full-width-project-link">
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
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default FullWidthProject;
