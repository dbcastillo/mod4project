import React from 'react';

const DrinkContainer = (props) => {
  const drink =
    props.drinks.map(drink =>
      <div key={drink.id} id='single-drink'>
        <img src={drink.image} className='drink' alt=''/>
        <br></br>
        <br></br>
        <button type="button">Click to see {drink.beverage} drinkers</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )

  return (
    <div id='drink-container'>
      <h1 class="flash" id='single-drink'>
      </h1>
      <br></br>
      <br></br>
      {drink}
    </div>
  )
}

export default DrinkContainer;
