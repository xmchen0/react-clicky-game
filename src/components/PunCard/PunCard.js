import React from "react";
import "./PunCard.css";

const PunCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPun(props.punny)}
                className={props.currentScore === 0}>
                <img alt={props.punny} src={props.image} />
            </a>
        </div>
    </div>
);

export default PunCard;
