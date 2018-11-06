import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class NewBowlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var bowlName = document.querySelector('input').value;
    if (bowlName) {
      fetch("http://localhost:8000/bowl", {
        // mode: 'no-cors',
        cache: "no-cache",
        method: "POST",
        headers: {
           "Content-Type": "application/json; charset=utf-8",
        },
        dataType: "JSON",
        body: JSON.stringify({Name: bowlName})
      })
      .then(response => response.json())
      .then(json => {
        console.log('parsed json', json) // access json.body here
      })
      .catch(error => {
        console.log(error)
      });
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())
      // .then(json => console.log(json))
      // alert('A bowl was created: ' + this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="new">
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Create a new bowl:</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Create new bowl" />
        </form>
      </div>
    );
  }
}

class BowlList extends Component {
  render() {
    var items = [];
    this.props.bowls.map((item, index) => {
      if (item) {
        items.push(<li>{item}</li>);
      }
    });
    return (
      <ol>
        {items}
      </ol>
    )
  }
}

class Kitchen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bowls: Array(9).fill(null),
        currentBowl: null
      };
    }
    
    render() {
      return (
        <div className="main-container">
          <NewBowlForm />
          <div className="CurrentBowl">
            <p>Current Bowl: </p>
          </div>
          <BowlList bowls={this.state.bowls}/>
        </div>
      );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="head-foot-container">
          <div className="title">Cake Factory</div>
        </div>
        <Kitchen />
        <div className="head-foot-container">
          <div className="footer">Albro's super cool cake company</div>
        </div>
      </div>
    );
  }
}

export default App;
