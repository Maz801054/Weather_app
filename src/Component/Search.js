import React, { useRef } from "react";

export default function Search(props) {
  const searchInput = useRef();
  return (
    <div className="d-flex justify-content-center">
      <input
        type="search"
        className="bordar bordar-black p-3 bg-dark text-light fw-bold"
        style={{ width: "100vh" }}
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
      />
      <button
        type="button"
        className="btn btn-dark"
        style={{ width: "10vw" }}
        value={props.searchData}
        onClick={props.searchWeather}
      >
        Search
      </button>
    </div>
  );
}
