import React, { useEffect, useState } from "react";
import Card from "./card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';



//create your first component
const Home = (props) => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setSeconds((prevSeconds) => {
				return prevSeconds+1;
			});
		}, 1000);
	}, []);

	return (
		<div className="bg-dark container">
			<div className="bg-light row text-center">		
				<FontAwesomeIcon icon={faClock} />
				<Card seconds={seconds} />
				<button onClick={() => setSeconds(0)}>Reiniciar</button>
				{/* <Card digitouno={uno} digitodos={dos} digitotres={tres} digitcuatro={cuatro} digitocinco={cinco} digitoseis={sies} /> */}
			</div>
		</div>
	);
};

export default Home;
