import CardContainer from "../common/cardContainer";
import {
	faLink,
	faLaptopCode,
	faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import Skill from "./skill";
import { TECH } from "../../assets/techs";

import "./styles/skills.css";

const Skills = () => {
	return (
		<CardContainer
			icon={faScrewdriverWrench}
			title="Skills"
			body={
				<div className="skills-body">
					{TECH.map((tech, index) => (
						<div className="skills-skill" key={index}>
							<Skill
								name={tech.name}
								imageUrl={tech.url}
								clickable={tech.clickable}
							/>
						</div>
					))}
				</div>
			}
		/>
	);
};

export default Skills;
