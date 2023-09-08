const INFO = {
	main: {
		title: "Junteng Ma | Portfolio",
		name: "Junteng Ma",
		email: "junteng.ma@outlook.com",
		logo: "../logo.jpg",
	},

	socials: {
		github: "http://github.happym.me/",
		linkedin: "http://linkedin.happym.me/",
	},

	homepage: {
		title: "Full-stack web developer, and a enthusiastic learner.",
		description:
			"I am a fullstack developer with expertise in Springboot and React.js. I have experience in building web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am currently seeking software developer opportunities in Canada, and I would greatly appreciate any assistance you can provide.",
	},

	about: {
		title1: "I'm Junteng Ma, ",
		title2: " a new graduate actively seeking software developer opportunities in Canada",
		description: [
			"I have recently earned a master's degree in Applied Computer Science from Concordia University, graduating with a GPA of 4.1 out of 4.3. I am passionate about learning new technologies and have a strong ability to acquire new tech stacks quickly. ",

			"I had experience working on a range of complex projects, utilizing programming languages such as Java, Python, and JavaScript (TypeScript) and related tech stacks, including Spring Boot, Flask, Vue.js, React.js. I have also recently become familiar with the .NET framework. I'm able to work in a team delivering high-quality projects and share ideas with team members.",
		],
	},

	experiences: [
		{
			logo: "concordia.png",
			date: "Sep 2021 - May 2023",
			title: "Concordia University",
			place: "Montreal, Canada",
			description: [
				"Master of Applied Computer Science",
				"CGPA: 4.1/4.3",
			],
		},
		{
			logo: "neusoft.png",
			date: "Apr 2020 - Jul 2020",
			title: "Neusoft",
			place: "Shenyang, China",
			description: [
				"Fullstack Developer Intern",
				"Collabrated with supervisor",
				"Developed functionalities with SpringBoot and Vue.js",
			],
		},
		{
			logo: "neu.png",
			date: "Aug 2017 - Jul 2021",
			title: "Northeastern University",
			place: "Shenyang, China",
			description: ["Bachelor of Software Engineering", "GPA: 3.7/5.0"],
		},
	],
	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			date: "June 2023 - Auguest 2023",
			title: "Happy Store",
			description:
				"A store application supporting products filtering and paging, user tracking with cookie and token, user authentication and Stripe payment. Developed with .NET 6 and React.js and deployed via Docker containers on an AWS EC2 server.",
			detailedDescriptions: [
				"Created a store application with .Net as the backend and React.js as the frontend, utilizing Git for version control.",
				"Implemented user interface with Material-UI, managed data with Redux, and fetched API data with Axios.",
				"Applied filters and paging in backend, utilized JWT for user authentication and used Stripe API for use payment.",
				"Deployed the application with docker container on a AWS EC2 server.",
			],
			logo: "../projectImgs/store_app.png",
			techStacks: [
				".net",
				"react.js",
				"postgresql",
				"docker",
				"aws",
				"csharp",
				"typescript",
			],
			notShowTechStacks: ["html", "git", "javascript", "mysql"],
			show: true,
			link: "http://store.happym.me",
			githubLink: "https://github.com/happym233/store_app",
		},
		{
			date: "June 2023 - Auguest 2023",
			title: "Happy Read Library",
			description:
				"A library website allowing user rent and return books. Developed with Springboot and React.js frameworks, utilizing MySQL database and deployed with Docker container on a AWS server.",
			detailedDescriptions: [
				"Developeded a responsive library website with Springboot and React.js frameworks, allowing user to borrow or return books on the website.",
				"Made the frontend responsive with Bootstrap framework and used JWT token for user role authentication.",
				"Applied project management with Maven, integrated Okta OAuth2 authentication to enhance security, and utilized Spring JPA to interact with MySQL database",
			],
			logo: "../projectImgs/library_app.png",
			techStacks: [
				"springboot",
				"react.js",
				"mysql",
				"docker",
				"aws",
				"java",
				"typescript",
			],
			notShowTechStacks: ["html", "git", "javascript", "postgresql"],
			show: true,
			link: "http://library.happym.me",
			githubLink: "https://github.com/happym233/library_app",
		},
		{
			date: "Feb 2023 - Apr 2023",
			title: "Construction Site Incident Classification",
			description:
				"Perform data analysis on worker incident data, use machine learning models including Random Forest, SVM to \
				predict possibilities of various security incidents",
			detailedDescriptions: [
				"Performed data analysis on worker data provided by Sofvie Inc, predicting the possibility of various security incidents.",
				"Analyzed database schema, discussed with the team and employees and implemented a SQL generation tool.",
				"Dealt with dirty data and class imbalance, applied one-hot/frequency encoding and transformed timestamps to numerical data, improved the prediction accuracy of Random Forest model with 5%",
			],
			logo: "../projectImgs/site_incident_prediction.png",
			techStacks: ["python", "mysql", "colab", "scikit-learn"],
			notShowTechStacks: ["git"],
			show: true,
			link: "",
			githubLink: "https://github.com/happym233/SOEN6111",
		},
		{
			date: "Feb 2023 - May 2023",
			title: "Compiler On Moon Processor",
			description:
				"A simple compiler built on moon processor with the process of lexical analysis, syntactic analysis, AST generation, semantic analysis and code generation.",
			detailedDescriptions: [
				"Built a compiler capable of compiling a high-level object-oriented language (supporting int basic type, object with member variables and functions, if condition, while loop, system in/out, array and function call) into assembly code.",
				"Applied singleton design pattern and factory design pattern on syntax analysis phase, implemented tree data structure for AST generation and utilized visitor design pattern during semantic analysis and code generation.",
			],
			logo: "../projectImgs/compiler.png",
			techStacks: ["Java"],
			notShowTechStacks: ["git"],
			show: true,
			link: "",
			githubLink: "https://github.com/happym233/CompilerDesign",
		},
		{
			date: "Oct 2022 - Dec 2022",
			title: "Flight Query System",
			description:
				"A query system  supporting fetching data with parameters, Utilized various design patterns, data source architecture and object-oriented system design.",
			detailedDescriptions: [
				"Built a flight query system based on real data fetched on aviationstack.com and distributed work within a student team.",
				"Designed the system with class diagram, constructed SQLite database schema, specified 3-layer data source architecture and applied singleton design pattern, factory design pattern and bridge design pattern.",
				"Deployed the SQLite database, developed java application with MVC framework, utilized Git for version control and tested the system with JUnit framework.",
			],
			logo: "../projectImgs/flight_query.png",
			techStacks: ["Java", "Postgresql"],
			notShowTechStacks: ["git"],
			link: "",
			githubLink: "https://github.com/happym233/flgiht_api_rebuilding",
		},
		{
			date: "Oct 2022 - Dec 2022",
			title: "Selective Repeat Protocal and HTTP client-server application",
			description:
				"Implemented Selective Repeat Protocal based on UDP and simple HTTP based on the Selective Repeat Protocal. Tested the HTTP by developing client and server with router between that simulated delay and loss.",
			detailedDescriptions: [
				"Used unreliable protocol to develop Selective Repeat Protocol in place of TCP to create reliable network transportation.",
				"Implemented {HTTP protocol} based on the self-implemented Selective Repeat Protocol and Constructed multithread server and client based on the HTTP protocol.",
			],
			logo: "../projectImgs/http_with_selective.png",
			techStacks: ["Java"],
			notShowTechStacks: ["git"],
			show: true,
			link: "",
			githubLink: "https://github.com/happym233/SelectiveRepeatProtocal",
		},
		{
			date: "Jan 2022 - Apr 2022",
			title: "Music Genre Classificaton",
			description:
				"Applied data tranform on music wave data and implemented deep learning models including CNN, LSTM, ResNet, CRDNN to classify music into different genres.",
			detailedDescriptions: [
				"Applied deep learning models on classification task based on GTZAN dataset, processed audio data with scikit-learn by transfering the audio data into numpy ndarray and implemented models including MLP, CNNs(CNN1d, CNN2d, ResNet), LSTM and CRDNN with PyTorch.",
				"Achieved classification accuracy of 85.28% with CRDNN model, improving classification accuracy by around 10% comparing to LSTM model.",
			],
			logo: "../projectImgs/music_genre_classification.png",
			techStacks: ["Python", "colab", "scikit-learn", "pytorch"],
			notShowTechStacks: ["git"],
			show: true,
			link: "",
			githubLink:
				"https://github.com/happym233/music_genre_classification",
		},
		{
			date: "Jan 2022 - Apr 2022",
			title: "Chinese Food Recognition",
			description:
				"Used pretrained models and transfer learning to recognize chinese food by image.",
			detailedDescriptions: [
				"Applied transfer learning on pretrained models including VGG16, ResNet, AlexNet and Google Net to classify chinese food images into various categories.",
				"Show features extracted by pretrained models and used metrics including precession, recall, f1-score, confusion matrix to compare performances between different deep learning models. ",
			],
			logo: "../projectImgs/chinese_food.png",
			techStacks: ["Python", "colab", "scikit-learn", "pytorch"],
			notShowTechStacks: ["git"],
			link: "",
			githubLink:
				"https://github.com/happym233/chinese_food_classification",
		},
		{
			date: "Sep 2021 - Nov 2021",
			title: "Distributed File System",
			description:
				"Developed stubs and skeletons at client and server sides, which allow for transparent location, reading and writing of files maintained at networked computers.",
			detailedDescriptions: [
				"Implemented an RMI library including the skeleton, a multithread TCP server accepting requests from stub to call methods from interface and the stub which connects to skeleton and provide a simple interface to user.",
				"Based on RMI library, developed a distributed file system with naming server maintaining file system directory tree and storage server holding files.",
			],
			logo: "../projectImgs/distributed_file_system.png",
			techStacks: ["Java"],
			notShowTechStacks: ["git"],
			link: "",
			githubLink:
				"https://github.com/happym233/Distributed-File-System/tree/master/StarterCode",
		},
	],
};

export default INFO;
