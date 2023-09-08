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
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { TECH, findTech } from "../assets/techs";

const Projects = () => {
	const { tech } = useParams();
	const navigate = useNavigate();
	const currentSEO = SEO.find((item) => item.page === "projects");

	useEffect(() => {
		if (
			tech &&
			TECH.map((t) => t.name.toLowerCase()).indexOf(tech.toLowerCase()) <
				0
		)
			navigate("/not-found");
		window.scrollTo(0, 0);
	}, [tech]);

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
						{(!tech || tech === "") && (
							<>
								<div className="title projects-title">
									My{" "}
									<span className="color-link">Projects</span>
								</div>

								<div className="subtitle projects-subtitle">
									I am a passionate programmer who is eager to
									work on complex and challenging projects in
									order to further improve my technical
									skills. Here are some projects I have
									developed in the past. I will continue to
									improve myself and deliver more valuable
									applications in the future.
								</div>
							</>
						)}
						{tech && (
							<>
								<div className="project-back-container">
									<div
										className="back-container"
										onClick={() => {
											console.log("click");
											navigate(-1);
										}}
									>
										<IoIosArrowDropleft />
									</div>
									<div className="project-back-title">
										<span className="color-link">
											{findTech(tech).name}
										</span>{" "}
										Projects
									</div>

									<img
										className="project-back-img"
										src={findTech(tech).url}
										alt={findTech(tech).name}
									/>
								</div>
							</>
						)}
						{(!tech || tech === "") && (
							<div
								className={
									"projects-teck-skills " +
									(tech &&
										tech !== "" &&
										"back-skill-container")
								}
							>
								<Skills />
							</div>
						)}

						<div className="projects-list">
							<AllFullWidthProjects tech={tech} />
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
