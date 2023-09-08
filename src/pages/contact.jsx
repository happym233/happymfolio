import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-wrapper">
						<div className="contact-container">
							<div className="title contact-title">
								Let's Get in Touch: Ways to Connect with Me
							</div>

							<div className="subtitle contact-subtitle">
								Thank you for your interest in getting in touch
								with me. If you have any question or comment,
								please feel free to email me directly at &nbsp;{" "}
								<a
									href={`mailto:${INFO.main.email}`}
									className="link-color"
								>
									{INFO.main.email}
								</a>
								. You can also find me on{" "}
								<a
									href="https://www.linkedin.com/in/junteng-ma-27928422a/"
									className="link-color"
									target="_blank"
									rel="noreferrer"
								>
									https://www.linkedin.com/in/junteng-ma-27928422a/
								</a>{" "}
								and welcome to connect with me on Linkedin.
								Thanks again for your interest, and I look
								forward to hearing from you!
							</div>
						</div>

						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
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

export default Contact;
