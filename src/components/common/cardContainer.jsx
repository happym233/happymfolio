import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";

const cardContainer = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="contain">
			<div className="contain-container">
				<div className="card-header">
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

export default cardContainer;
