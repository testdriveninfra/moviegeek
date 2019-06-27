import React, { useState } from "react";

const Search = (props) => {
  //Hooks. Arg is initial state, return current state as Array and a function
  // to update it. Current status of input field
  const [searchValue, setSearchValue] = useState("");

  //Updates states
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInput = () => {
    setSearchValue("");
  }

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInput();
  }

  return (
    <form className="search">
      <input value={searchValue} onChange={handleSearchInputChange} type="text" />
      <input onClick={callSearch} type="submit" value="Search Movie" />
    </form>
  );
}

export default Search;
