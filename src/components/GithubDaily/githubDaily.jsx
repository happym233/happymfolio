import React from "react";
import GitHubCalendar from "react-github-calendar";
import CardContainer from "../common/cardContainer";
import { faLink, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function GithubDaily() {
	return (
		<CardContainer
			icon={faLaptopCode}
			title="Projects"
			body={
				<GitHubCalendar
					username="happym233"
					blockSize={15}
					blockMargin={5}
					fontSize={16}
					style={{ color: "var(--secondary-color)" }}
				/>
			}
		/>
	);
}

export default GithubDaily;
