import React from 'react';

const FaceContainer = (props) => {
  const face =
    props.faces.map(face =>
      <div key={face.id} id='single-face'>
        <img src={face.image} className='face' alt=''/>
        <br></br>
        <br></br>
        <button type="button" id='face-button'>Click to see {face.name} people</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )

  return (
    <div id='face-container'>
      <h1 class="flash" id='single-face'>
      </h1>
      <br></br>
      <br></br>
      {face}
    </div>
  )
}

export default FaceContainer;
