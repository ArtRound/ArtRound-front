import React, { useState } from 'react';
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatepicker from "react-datepicker";


const RangeDatePicker = ()=> {
    const [dateRange, setDateRange]=useState([null, null]);
    const [startDate, endDate] = dateRange;
    // console.log(startDate,endDate);
    return (
        <TotalContainer>
            <Container>
                <ReactDatepicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update)=>{
                        setDateRange(update);
                    }}
                />
            </Container>
        </TotalContainer>
    );
}

const Container = styled.div``;

const TotalContainer = styled.div`
    width:40vw;
    height:40vh;
    background-color:yellowgreen;
    display: flex;
    justify-content :center;
`;


export default RangeDatePicker;