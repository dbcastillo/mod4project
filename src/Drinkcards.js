import React from 'react';

const Drinkcards = (props) => {
  let card = props.cards.map(card =>
      <div key={card.id} id='single-card'>
      <h1>PROFILE</h1>
      <br></br>
      <hr></hr>
      <hr></hr>
      <br></br>
      <img src={card.image} className='card' alt=''/>
      <h1>Name: {card.user}</h1>
      <br></br>
      <h2>Drink: {card.beverage}</h2>
      <br></br>
      <h2>Mood: {card.mood}</h2>
      <br></br>
      <h4>Description: {card.description}</h4>
      <br></br>
      </div>
    )

  return (
    <div id='card-container'>
      {card}
    </div>
  )
}

export default Drinkcards;
