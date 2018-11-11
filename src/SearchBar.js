import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <hr></hr>
      <hr></hr>
      <br></br>
      <h1 className="h1">Filter Profiles:</h1>
      <br></br>
      <form>
      <input
        onChange={props.handleInput}
        type="search"
        id="search"
        placeholder="SEARCH BY NAME:">
      </input>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <hr></hr>
      </form>
    </div>
  )
}

export default SearchBar
