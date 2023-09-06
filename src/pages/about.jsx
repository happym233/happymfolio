import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import { useNavigate } from "react-router-dom";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();
	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title1} <br />{" "}
									{INFO.about.title2}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description.map((des) => (
										<>
											<p>{des}</p>
										</>
									))}
									<p>
										I’m currently seeking developer
										opportunities in Canada, and am open to
										any relative positions. Please feel free
										to{" "}
										<span
											onClick={() => navigate("/contact")}
											className="contact-me-link"
										>
											contact me
										</span>{" "}
										if you could provide any support.
									</p>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="about-page">
						<div className="about-page-title">About this page</div>
						<div className="about-page-content">
							<p>
								Thank you for visiting my personal webpage. This
								page is built by applying several updates and
								adding new components based on a{" "}
								<a
									className="about-page-link"
									href="https://github.com/truethari/reactfolio"
								>
									template
								</a>{" "}
								developed by Tharindu Nayanajith. I'm greatly
								impressed by this beautiful template he has
								created and deeply appreciate his open-source
								contributions. Please refer to{" "}
								<a
									className="about-page-link"
									href="https://github.com/truethari/reactfolio"
								>
									truethari/reactfolio
								</a>{" "}
								to access this template or view{" "}
								<a
									className="about-page-link"
									href="https://reactfolio.tharindu.dev/"
								>
									reactfolio.tharindu.dev
								</a>{" "}
								for a demo of this template. If you are
								interested in my updates, feel free to check{" "}
								<a
									className="about-page-link"
									href="https://github.com/happym233/happymfolio"
								>
									happym233/happymfolio
								</a>{" "}
								as well.
							</p>
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

export default About;
