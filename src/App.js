import React from 'react';
import './App.css';
import DrinkContainer from './DrinkContainer'
import FaceContainer from './FaceContainer'
import DrinkForm from './DrinkForm'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      margaritas: [],
      faces: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/beverages')
    .then(res => res.json())
    .then(margaritas =>
      this.setState({margaritas: margaritas})
    )

    fetch('http://localhost:3000/faces')
    .then(res => res.json())
    .then(faces =>
      this.setState({faces: faces})
    )
  }

  render() {
    return (
      <div className="App">
        <div className="Body">
          <DrinkContainer drinks={this.state.margaritas}/>
          <DrinkForm/>
          <FaceContainer faces={this.state.faces}/>
        </div>
      </div>
    )
  }
}

export default App
