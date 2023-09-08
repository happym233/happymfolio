import React from "react";
import "./styles/skill.css";
import { useNavigate } from "react-router-dom";

const Skill = (props) => {
	const { name, imageUrl, clickable, redirect } = props;
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<div
				className="skill container"
				onClick={() => {
					if (clickable && redirect) window.location.href = redirect;
					else if (clickable) navigate(`/projects/${name}`);
				}}
			>
				<img src={imageUrl} alt={name} className="skill-logo" />
				<div className={"overlay " + (clickable && "overlay-pointer")}>
					<div className="overlay-text">{name}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
