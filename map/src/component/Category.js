import React, {useState} from 'react';
import styled from "styled-components";
import RangeDatePicker from './RangeDatePicker';

const Category = () =>{

    const [dateColor, setDateColor] = useState("");
    const changeDateColor = () => {
        setDateColor(dateColor === "" ? "active" : "");
        setPriceColor(priceColor === "active" ? "" : "");
    }

    const [priceColor, setPriceColor] = useState("");
    const changePriceColor = () => {
        setPriceColor(priceColor === "" ? "active" : "");
        setDateColor(dateColor === "active" ? "" : "");
    }


    return(
        <>
            <ButtonContainer>
                <StyledButton onClick={changePriceColor}  className={`${priceColor}`} >가격</StyledButton>
                <StyledButton onClick={changeDateColor} className={`${dateColor}`}>기간</StyledButton>
            </ButtonContainer>
            {dateColor==="active" && <CalendarContainer> 
                <RangeDatePicker/>
            </CalendarContainer>}
        </>
    )
};

const ButtonContainer = styled.div`
    position:absolute;
    z-index: 2;
    top:40px;
    width: 100%;
    height: 15%;
    display:flex;
    justify-content : space-around;
    align-items:flex-start;

`;

const StyledButton  = styled.button`
    position:relative;
    width: 157px;
    height: 35px;
    border: 2px solid #6193C4;
    box-sizing: border-box;
    border-radius: 22px;
    cursor:pointer;
    margin-top : 10px;

    display:flex;
    align-items:center;
    justify-content : center;

    /* font-family: Sahitya; */
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;

    &.active{
        background:linear-gradient(86.11deg, #7CBAF7 35.33%, rgba(124, 186, 247, 0.61) 127.15%, rgba(124, 186, 247, 0) 127.16%) ;
    }
`;


const CalendarContainer = styled.div`
    position:absolute;
    z-index :2;
    width: 100vw;
    height: 50vh;
    margin-top:160px;
    display: flex;
    justify-content : center;
    align-items: center;
`;

export default Category;
