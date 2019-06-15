import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-bar nav-justified">
            <li><button type="button" onClick={ refreshPage }> <span><i class="fa fa-refresh" aria-hidden="true"></i> Reset</span> </button></li>
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

function refreshPage(){ 
    window.location.reload(); 
}

export default Navbar;
