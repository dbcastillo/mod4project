import React from 'react'

// const SearchBar = (props) => {
//   return (
//     <div className="search-bar">
//       <hr></hr>
//       <hr></hr>
//       <br></br>
//
//       <h1 className="h1">Filter Profiles:</h1>
//
//       <br></br>
//
//       <form>
//       <input
//         onChange={props.handleRadio}
//         type="radio"
//         value="All"
//         checked={props.sortBy === "All"}
//       />All
//       <br></br>
//       <br></br>
//       <input
//         onChange={props.handleRadio}
//         type="radio"
//         value="Margarita"
//         checked={props.searchBy === "Margarita"}
//       />Margarita
//       <br></br>
//       <br></br>
//       <input
//         onChange={props.handleRadio}
//         type="radio"
//         value="Blue Margarita"
//         checked={props.searchBy === "Blue Margarita"}
//       />Blue Margarita
//       <br></br>
//       <br></br>
//       <input
//         onChange={props.handleRadio}
//         type="radio"
//         value="Tommy's Margarita"
//         checked={props.searchBy === "Tommy's Margarita"}
//       />Tommys Margarita
//       <br></br>
//       <br></br>
//       <input
//         onChange={props.handleRadio}
//         type="radio"
//         value="Whitecap Margarita"
//         checked={props.searchBy === "Whitecap Margarita"}
//       />Whitecap Margarita
//       <br></br>
//       <br></br>
//       <input
//         onChange={props.handleRadio}
//         type="radio"
//         value="Strawberry Margarita"
//         checked={props.searchBy === "Strawberry Margarita"}
//       />Strawberry Margarita
//
//       <br></br>
//       <br></br>
//       <br></br>
//       <hr></hr>
//       <hr></hr>
//
//       </form>
//     </div>
//   )
// }

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
