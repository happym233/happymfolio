import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/fullWidthProject.css";

const FullWidthProject = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="full-width-project">
				<div className="project">
					<Link to={link}>
						<div className="project-container">
							<div className="project-image">
								<div className="project-image-container">
									<img src={logo} alt={title} />
								</div>
							</div>
							<div className="project-left-side">
								<div className="project-date">
									|&nbsp;&nbsp;&nbsp;{"August, 2023"}
								</div>
							</div>
							<div className="project-title">{title}</div>
							<div className="project-description">
								<div className="project-description-text">
									{description}
								</div>
								<ul>
									<li>des1</li>
									<li>des2</li>
									<li>des3</li>
									<li>des4</li>
								</ul>
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>

								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default FullWidthProject;
