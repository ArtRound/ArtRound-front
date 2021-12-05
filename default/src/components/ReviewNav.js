import React from "react";
import '../pages/ReviewList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';


function ReviewNav(props) {

    let history = useHistory();

    return (
        <div className="nav">
            <FontAwesomeIcon
                className="nav-icon"
                icon={faChevronLeft}
                onClick={() => { history.goBack() }} /> <span>{props.navTitle}</span>
        </div>
    )
}

export default ReviewNav;