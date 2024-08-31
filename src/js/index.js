//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Card from "./component/card.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
// let segundos = 0
// setInterval(() => {
//     const uno = Math.floor ((segundos/1)%10)
//     const dos = Math.floor ((segundos/10)%10)
//     const tres = Math.floor ((segundos/100)%10)
//     const cuatro = Math.floor ((segundos/1000)%10)
//     const cinco = Math.floor ((segundos/10000)%10)
//     const sies = Math.floor ((segundos/100000)%10)

//     segundos +=1
    
//     ReactDOM.createRoot(document.getElementById('app')).render( <Card digitouno={uno} digitodos={dos} digitotres={tres} digitcuatro={cuatro} digitocinco={cinco} digitoseis={sies} /> );
    
// }, 1000);

//<div className="col counter">{props.digitodos}</div>
//<div className="col counter">{props.digitouno}</div>