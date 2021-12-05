import React, { useState } from 'react';
import '../pages/ReviewList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

function Heart(props) {

    let colorCount = Array.from({ length: props.count }, (v, i) => i)
    let uncoloredCount = Array.from({ length: (5 - props.count) }, (v, i) => i)

    return (
        <>
            {
                colorCount.map((v, i) => {
                    return <ColorHeart />
                })
            }
            {
                uncoloredCount.map((v, i) => {
                    return <UncoloredHeart />
                })
            }
        </>
    )
}

export default Heart;


function ColorHeart() {
    return (
        <>
            <FontAwesomeIcon
                icon={fasFaHeart}
                className="heart"
            />
        </>
    )
}

function UncoloredHeart() {
    return (
        <>
            <FontAwesomeIcon
                className="heart"
                icon={farFaHeart}

            />
        </>
    )
}