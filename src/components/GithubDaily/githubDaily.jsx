import React from "react";
import GitHubCalendar from "react-github-calendar";
import CardContainer from "../common/cardContainer";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/githubDaily.css";

function GithubDaily() {
	const selectLastHalfYear = (contributions) => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const shownMonths = 6;

		return contributions.filter((activity) => {
			const date = new Date(activity.date);
			const monthOfDay = date.getMonth();

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			);
		});
	};

	return (
		<>
			<div className="git-contribute-destop">
				<CardContainer
					icon={faGithub}
					title="Contribution"
					body={
						<GitHubCalendar
							username="happym233"
							blockSize={15}
							blockMargin={5}
							fontSize={16}
							style={{
								color: "var(--secondary-color)",
							}}
						/>
					}
				/>
			</div>

			<div className="git-contribute-mobile">
				<CardContainer
					icon={faGithub}
					title="Contribution"
					body={
						<GitHubCalendar
							username="happym233"
							blockSize={15}
							blockMargin={5}
							fontSize={16}
							transformData={selectLastHalfYear}
							hideColorLegend
							labels={{
								totalCount:
									"{{count}} contributions in the last half year",
							}}
							style={{
								color: "var(--secondary-color)",
							}}
						/>
					}
				/>
			</div>
		</>
	);
}

export default GithubDaily;
