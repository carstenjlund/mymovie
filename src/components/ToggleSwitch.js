/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const ToggleSwitch = () => {
	const [isOn, setIsOn] = useState(false);

	useEffect(() => {
		console.log("change theme");
	}, [isOn]);

	const style = css`
		width: 3.25rem;
		height: 1.625rem;
		position: relative;
		cursor: pointer;
		border: 0.25rem solid;
		border-color: ${isOn ? "#2196f3" : "#ccc"};
		background-color: ${isOn ? "#2196f3" : "#ccc"};
		-webkit-transition: 0.4s;
		transition: 0.4s;

		&:before {
			position: absolute;
			content: "";
			height: 1.625rem;
			width: 1.625rem;
			left: 0;
			top: 0;
			background-color: white;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			${isOn &&
			`
            -webkit-transform: translate(1.625rem, 0);
            -ms-transform: translate(1.625rem, 0);
            transform: translate(1.625rem, 0);
            `}
		}

		/* Rounded sliders */
		&.round {
			border-radius: 1.625rem;
		}

		&.round:before {
			border-radius: 50%;
		}
	`;

	const handleClick = () => {
		setIsOn(!isOn);
	};
	return <div css={style} className="round" onClick={handleClick} />;
};

export default ToggleSwitch;
