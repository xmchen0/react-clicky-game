import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-bar nav-justified">
            <li><a href="/"><i class="fa fa-refresh" aria-hidden="true"></i> Reset </a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" : "desc-normal"}>
                {props.message}
            </li>
            <li>Score: <span style={{color:"#fdd53e"}}>{props.currentScore}</span> / 12</li> 
            <li>Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;
