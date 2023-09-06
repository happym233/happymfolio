const TECH = [
	{
		name: "Java",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
		clickable: true,
	},
	{
		name: "Python",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		clickable: true,
	},
	{
		name: "Javascript",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		clickable: true,
	},
	{
		name: "Typescript",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
		clickable: true,
	},
	{
		name: "HTML",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
		clickable: true,
	},
	{
		name: "C",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
	},
	{
		name: "Cpp",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
	},
	{
		name: "Csharp",
		url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
		clickable: true,
	},
	{
		name: "SpringBoot",
		url: "./techImgs/springboot.png",
		clickable: true,
	},
	{
		name: ".Net",
		url: "./techImgs/dotnet.png",
		clickable: true,
	},
	{
		name: "Vue.js",
		url: "./techImgs/vuejs.png",
		clickable: true,
	},
	{
		name: "React.js",
		url: "./techImgs/reactjs.png",
		clickable: true,
	},
	{
		name: "MySQL",
		url: "./techImgs/mysql.png",
		clickable: true,
	},
	{
		name: "PostgreSQL",
		url: "./techImgs/postgresql.png",
		clickable: true,
	},
	{
		name: "Git",
		url: "./techImgs/git.png",
		clickable: true,
	},
	{
		name: "Ubuntu",
		url: "./techImgs/ubuntu.png",
	},
	{
		name: "Docker",
		url: "./techImgs/docker.png",
		clickable: true,
	},
	{
		name: "Vim",
		url: "./techImgs/vim.png",
	},
	{
		name: "AWS",
		url: "./techImgs/aws.png",
		clickable: true,
	},
	{
		name: "Pytorch",
		url: "./techImgs/pytorch.png",
	},
];

const findTech = (name) => {
	return TECH.find((t) => t.name.toLowerCase() === name.toLowerCase());
};

export { TECH, findTech };
