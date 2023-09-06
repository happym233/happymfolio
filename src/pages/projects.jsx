import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import Skills from "../components/skills/skills";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import FullWidthProject from "../components/projects/fullWidthProject";
import AllFullWidthProjects from "../components/projects/allFullWidthProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							My <span className="color-link">Projects</span>
						</div>

						<div className="subtitle projects-subtitle">
							I am a passionate programmer who is eager to work on
							complex and challenging projects in order to further
							improve my technical skills. Here are some projects
							I have developed in the past. I will continue to
							improve myself and deliver more valuable
							applications in the future.
						</div>

						<div className="projects-teck-skills">
							<Skills />
						</div>

						<div className="projects-list">
							<AllFullWidthProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
