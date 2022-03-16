import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const [searchInputData, setSearchInputData] = useState("");

  const searchMarkers = () => {
    const searchData = props.artData.current.filter((item, index) => {
      return item.fcltyNm === searchInputData;
    });
    if (Object.keys(searchData).length) {
      props.setSearchMarker(searchData);
      props.setShowMarker(1);
    } else alert("해당 박물관이 없습니다.");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchMarkers();
  };
  return (
    <>
      <div className="search-wrap">
        <input
          placeholder="검색어를 입력하세요."
          onChange={(e) => {
            setSearchInputData(e.target.value);
          }}
          value={searchInputData}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={searchMarkers}
          className="search-btn"
        />
      </div>
    </>
  );
};

export default Search;
