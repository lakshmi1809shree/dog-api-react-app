import React,{Component} from 'react';

import logo from './logo.svg';
import './App.css';
import DogList from './DogList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs:[]
    }
  }
//this a react life cycle method ...
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((res) => res.json())
      .then((data) => {
        this.setState({dogs: data.message})
      })
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Welcome to Dog World
        </h1>
        <DogList   dogs={this.state.dogs}   />
      </div>
    );
  }
}

export default App;
