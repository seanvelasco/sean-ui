import styled from "@emotion/styled";

type Button = {
    transparent ?: boolean
    color: string
}

const Button = styled.button<Button>`
	border-radius: 0.25em;
	padding: 1em 2em;
	margin: auto;
	min-width: 120px;
	background-color: ${props => props.transparent ? "transparent" : props.color};
	text-transform: uppercase;
	border: 3px solid ${props => props.color};
	border-radius: 0.75em;
	width: 100%;
	transition: 200ms;
	cursor: pointer;
	:hover {
		filter: ${props => props.transparent ? "none" : "brightness(80%)"};
		border-color: ${props => props.transparent ? props.color : "#2672ab"};
		background-color: ${props => props.transparent ? props.color : "#2672ab"};
	}
`;

// StyledButton.defaultProps = {
//     theme: {
//         colors: {
//             primary: "#328dd2",
//         },
//         transparent: false
//     }
// }

// const theme = {
//     transparent: "transparent"
// }

// export interface ButtonProps {
//     label: string;
// }

// const Button = (props: ButtonProps) => {
//     return (
//         <div>{props.label}</div>
//     )
// }

export default Button;