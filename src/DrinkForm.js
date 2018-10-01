import React from 'react'

class DrinkForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="form-div">
      <br></br>
      <br></br>
      <hr></hr>
      <hr></hr>
      <br></br>
      <h2 id='profile'>Create Flat-Lounge Profile</h2>
      <br></br>
      <form onSubmit={this.props.handleSubmit} className='drink-form'>
      <input
        type="text"
        value={this.props.nameInput}
        name="nameInput"
        onChange={this.props.handleNameChange}
        placeholder="Enter name here:">
      </input>
      <br></br>
      <br></br>
      <h6>Choose Drink & Emotion</h6>
        <select
        onChange={this.props.handleDrinkChange}
        value={this.props.value}
        name="drink"
        id='drink-dropdown'>
          <option value="Margarita">Margarita</option>
          <option value="Blue Margarita">Blue Margarita</option>
          <option value="Tommy's Margarita">Tommys Margarita</option>
          <option value="Whitecap Margarita">Whitecap Margarita</option>
          <option value="Strawberry Margarita">Strawberry Margarita</option>
        </select>
        <select
          name="emotion"
          id='emotion-dropdown'
          onChange={this.props.handleMoodChange}
          value={this.props.value}>
          <option value="Ecstatic">Ecstatic</option>
          <option value="So-so">So-so</option>
          <option value="Frustrated">Frustrated</option>
          <option value="Content">Content</option>
          <option value="Determined">Determined</option>
        </select>
        <br></br>
        <br></br>
        <input
          type="text"
          name="descriptionInput"
          value={this.props.descriptionInput}
          onChange={this.props.handleDescriptionChange}
          placeholder="Describe your emotion:">
        </input>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <br></br>
        <hr></hr>
        <hr></hr>
      </form>
      </div>
    )
  }
}

export default DrinkForm
