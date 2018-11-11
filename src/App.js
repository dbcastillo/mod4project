import React from 'react';
import './App.css';
import Drinkcards from './Drinkcards'
import DrinkForm from './DrinkForm'
import SearchBar from './SearchBar'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      drinkcards: [],
      nameInput: "",
      descriptionInput: "",
      drinkInput: "",
      moodInput: "",
      filterTerm: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/drinkcards')
    .then(res => res.json())
    .then(drinkcards =>
      this.setState({drinkcards: drinkcards})
    )
  }

  margaritaImage = (drink) => {
    if (drink === 'Margarita') {
      return "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
    } else if (drink === "Blue Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg"
    } else if (drink === "Tommy's Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg"
    } else if (drink === "Whitecap Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg"
    } else if (drink === "Strawberry Margarita") {
      return "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
    }
  }

  handleInput = (event) => {
    this.setState({filterTerm: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/drinkcards', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: this.state.nameInput,
        beverage: this.state.drinkInput,
        mood: this.state.moodInput,
        description: this.state.descriptionInput,
        image: this.margaritaImage(this.state.drinkInput)
      })
    })
    .then(response => response.json())
    .then(drinkcard => {
      this.setState({
        drinkcards: [...this.state.drinkcards, drinkcard].reverse()
      })
    })
    this.setState({nameInput: ""})
    this.setState({descriptionInput: ""})
  }

  chooseCards = () => {
    if (this.state.filterTerm){
      return this.state.drinkcards.filter(drinkcard =>
        drinkcard.user.toLowerCase().includes(this.state.filterTerm) ||
      drinkcard.user.includes(this.state.filterTerm))
    } else {
      return this.state.drinkcards
    }
  }

  chooseName = () => {
    return this.state.nameInput
  }

  chooseMood = () => {
    return this.state.moodInput
  }

  chooseDrink = () => {
    return this.state.drinkInput
  }

  handleNameChange = (e) => {
    this.setState({nameInput: e.target.value})
  }

  handleDescriptionChange = (e) => {
    this.setState({descriptionInput: e.target.value})
  }

  handleMoodChange = (e) => {
    this.setState({moodInput: e.target.value})
  }

  handleDrinkChange = (e) => {
    this.setState({drinkInput: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1 className='flatlounge'>Flat-Lounge</h1>
        <div className="Body">
          <div id="NestedBody">
            <div id="searchNform">
              <DrinkForm
                drinkInput={this.chooseDrink()}
                moodInput={this.chooseMood()}
                nameInput={this.chooseName()}
                descriptionInput={this.state.descriptionInput}
                handleNameChange={this.handleNameChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleMoodChange={this.handleMoodChange}
                handleDrinkChange={this.handleDrinkChange}
                handleSubmit={this.handleSubmit}/>
              <br></br>
              <br></br>
            </div>
            <div id="searchNform2">
              <SearchBar
                handleRadio={this.handleRadio}
                sortBy={this.state.sortBy}
                handleInput={this.handleInput}>
              </SearchBar>
            </div>
          </div>
          <Drinkcards cards={this.chooseCards()}/>
        </div>
      </div>
    )
  }
}
export default App
