import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="card">
			<div className="card-container">
				{title && (
					<>
						<div className="card-header">
							<div className="card-icon">
								<FontAwesomeIcon icon={icon} />
							</div>
							<div className="card-title">{title}</div>
						</div>
						<div className="card-body">
							<div className="card-text">{body}</div>
						</div>
					</>
				)}
				{!title && <div className="card-text">{body}</div>}
			</div>
		</div>
	);
};

export default Card;
