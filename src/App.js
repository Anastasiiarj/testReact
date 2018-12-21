import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


const Profile = (props) => (
  <div>
    <img src="http://i.pravatar.cc/300" />
    <h1>{props.name} {props.surname}</h1>
    <p>Возраст: {props.age}</p>
    <p>Пол: {props.gender}</p>
    <p>О себе: {props.about}</p>
  </div>
)

class App extends React.Component {
  state = {
    age: 25,
  }

  newRandomAge = () => {
    this.setState({
      age: Math.ceil(Math.random() * 100)
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.newRandomAge}>Rerender</button>


        <Profile
          age={this.state.age}
          gender='мужской'
          about='Немного обо мне..'
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
