import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}));
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h1>Monster Roladex</h1>
        <SearchBox
          placeHolder="Please fill the monster name"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
