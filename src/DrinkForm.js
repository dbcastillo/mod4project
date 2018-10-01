import React from 'react'

class DrinkForm extends React.Component {
  render() {
    return (
      <div class="form-div">
      <h2 id='profile'>Create Flat-Lounge Profile</h2>
      <br></br>
      <form onSubmit={this.props.handleSubmit} className='drink-form'>
      <input type="text" name="name" placeholder="Enter name here:"></input>
      <br></br>
      <br></br>
      <h6>Choose Drink & Emotion</h6>
        <select name="drink">
          <option value="Margarita">Margarita</option>
          <option value="Blue Margarita">Blue Margarita</option>
          <option value="Tommy's Margarita">Tommys Margarita</option>
          <option value="Whitecap Margarita">Whitecap Margarita</option>
          <option value="Strawberry Margarita">Strawberry Margarita</option>
        </select>
        <select name="emotion">
          <option value="Ecstatic">Ecstatic</option>
          <option value="So-so">So-so</option>
          <option value="Frustrated">Frustrated</option>
          <option value="Content">Content</option>
          <option value="Determined">Determined</option>
        </select>
        <br></br>
        <br></br>
        <input type="text" name="description" placeholder="Describe your emotion:"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      </div>
    )
  }
}

export default DrinkForm
