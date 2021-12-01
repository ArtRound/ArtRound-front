import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle, faUserCog } from "@fortawesome/free-solid-svg-icons";
import './Icon.css';
import { Link } from 'react-router-dom';


function Icon(){
    return(
        <div className="footer">
            <Link to=''> <FontAwesomeIcon className="footer-icon" icon={faSearch} size={"2x"}/> </Link>
            <Link to=''> <FontAwesomeIcon className="footer-icon" icon={faUserCircle} size={"2x"}/> </Link>
            <Link to=''> <FontAwesomeIcon className="footer-icon" icon={faUserCog} size={"2x"}/> </Link>
        </div>
    );
};

export default Icon;