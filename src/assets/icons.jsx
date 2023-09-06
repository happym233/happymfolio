import "./styles/icons.css";

export const ExpIcon = (props) => {
	const { logo, name } = props;

	return <img src={logo} alt={name} className="full-size-icon" />;
};
