import React, { useState } from 'react';
import ReviewNav from '../components/ReviewNav';
import './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";


function Search() {

    let [searchData, setSearchData] = useState([]);
    let [inputData, setInputData] = useState('');
    let [onOff, setOnOff] = useState(true);

    return (
        <div>

            <ReviewNav />
            <div className="search-wrap">
                <input
                    placeholder="검색어를 입력하세요."
                    onChange={(e) => {
                        setInputData(e.target.value);
                    }}
                    value={inputData}
                    className="search-input"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    onClick={() => {
                        let copy = [...searchData];
                        copy.push(inputData);
                        setSearchData(copy);
                        setInputData('');
                    }}
                    className="search-btn"
                />
            </div>
            {
                onOff === true
                    ? <LastestSearch searchData={searchData} setSearchData={setSearchData} setOnOff={setOnOff} onOff={onOff} />
                    : (
                        <>
                            <p onClick={() => {
                                setOnOff(!onOff)
                            }}
                                className="turn-off-search"
                            >최근 검색어 키기</p>
                        </>
                    )
            }
        </div>
    )
}

export default Search;


//최근 검색어 
function LastestSearch(props) {

    return (
        <div>
            <p className="lastest-search">최근 검색어</p>
            {
                props.searchData.map((v, i) => {
                    return (
                        <div className="search-list">
                            <span key={i}>{v}</span>
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={() => {
                                    let copy = [...props.searchData];
                                    copy.splice(i, 1);
                                    props.setSearchData(copy);
                                }}
                                className="close-btn"
                            />
                        </div>
                    )
                })
            }
            <hr />
            <div className="search-footer">
                <span onClick={() => {
                    props.setOnOff(!props.onOff)
                }}
                    className="turn-on-search"

                >최근 검색어 끄기</span>
                <span onClick={() => {
                    props.setSearchData([]);
                }}
                    className="delete-all"
                >전체 삭제</span>
            </div>

        </div>
    );
}