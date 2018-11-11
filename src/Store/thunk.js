import {GET_ALL_DRINKCARDS} from './actionType'

const gotAllDrinks = (payload) => {
  return {
    type: GET_ALL_DRINKCARDS,
    payload: payload
    //payload is result after fetch request
  }
}
export const gettingAllDrinks = (dispatch) => {
  fetch('http://localhost:3000/drinkcards')
  .then(res => res.json())
  .then(AllDrinks =>
    dispatch(gotAllDrinks(AllDrinks))
  )
}

REDUX SETUP
1. Npm install redux react-redux redux-logger redux-thunk

2. In src directory add store directory w/3 files => actionType.js, store.js, thunk.js
3. Build out store file (has state)

  a)  imports:
      {createStore, applyMiddleware} from ‘redux’
      logger from ‘redux-logger’
      thunk from ‘redux-thunk’
  b)  Set initial state:
      let initial state = { drink: [ ], input: “”…}
  c)  Set reducer ( takes prev state & action to return new state):
      const reducer = (state = initialState, action) => {
        switch(action.type) {
          case GET_ALL_DRINKCARDS:
            return { …state, drinkcards: action.payload }
            // spread operator to add drinkcards as a key in state with a value(action.payload) which is handled in thunk and fetches the drinkcard data // default: return state
  d)  Create store, export store:
      const store = createStore(reducer, applyMiddleware(logger, thunk))
      export default store
4. Add Provider to index.js (highest level):

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
  )
5. Import store & Provider in index.js:

    {Provider} from 'react-redux'
    store from './Store/store'

6. Set action variable in actionType.js
    export const GET_ALL_DRINKCARDS = 'GET_ALL_DRINKCARDS'

7. Build out thunk file
  a) imports:
      {GET_ALL_DRINKCARDS} from './actionType'
  b) create funct that sets type & payload
    const gotAllDrinks = (payload) => {
      return {
        type: GET_ALL_DRINKCARDS,
        payload: payload
        //payload is result after fetch request
      }
    }
  c) create funct that dispatches & updates payload after fetching:
    export const gettingAllDrinks = (dispatch) => {
      fetch('http://localhost:3000/drinkcards')
      .then(res => res.json())
      .then(AllDrinks =>
        dispatch(gotAllDrinks(AllDrinks))
      )
    }

  CONNECT STATE TO APP
  1. imports:
    {connect} from 'react-redux'
    {gettingAllDrinks} from './Store/thunk'

  2. Maps:
    const MapStateToProps = (state) => {
      return {
        drinkcards: state.drinkcards
      }
    }

    const MapDispatchToProps = (dispatch) => {
      return {
        getAllDrinks: gettingAllDrinks(dispatch)
      }
    }

    REACT ROUTER
    - requests dont go to server, instead to react router to render components
  1. component folder in src
  2. home.js
      import React from 'react'
      const Home = () => {
        return (
          <div className='container'>
            <h4 className='center'>Home</h4>
            <p>paragraph</p>
          </div>
        )
      }
      export default Home
  3.  about.js
      (has everything home has, but replace home with about)
  4.    contact.js
      (same as about)
  5.  index.html add this above title tag
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
  6. navbar.js
      import React from 'react'
      import {Link, NavLink} from 'react-router-dom'
      const Navbar = () => {
        return (
          <nav className="nav-wrapper blue darken-3">
            <div className='container'>
              <a className='brand-logo'>Poke-Times</a>
              <ul>
                <li><Link to= "/">Home</a></li>
                <li><Link to= "/about">About</a></li>
                <li><Link to= "/contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        )
      }
  7. App.js
      import Navbar from './components/Navbar'
      nest navbar in return:
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}/>
        </div>
      </BrowserRouter>
      install react-router-dom
      import {BrowserRouter, Route} from 'react-router-dom'
      import Home from './components/Home'
