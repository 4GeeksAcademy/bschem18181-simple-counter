import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


const Card = (props)=>{
    const currenDigits= props.seconds.toString().length;
    console.log(currenDigits)
    const getZeros = () => {
        return "000000".slice(currenDigits)
    }
    return(
        
        <div>
            <div className="bg-dark col card">
                
                <div className="card-body" style={{height: "100px"}} >

                    <h5 className="fs-1 text text-white card-title" style={{letterSpacing: "40px"}}>
                        <FontAwesomeIcon icon={faClock} className="me-5 " />
                        {getZeros()}
                        {props.seconds}
                    </h5>
                </div>
            </div>
        </div>

    )
}

export default Card





