import React, {Component} from 'react';
import NameInput from './components/NameInput';
import NameList from './components/NameList';
import './App.css';

class App extends Component {
  state ={
    nameList: []
  }
  addName = (event) => {
    event.preventDefault()
    const furst = document.getElementById("firstName").value
    const lust = document.getElementById("lastName").value
    const nameList = this.state.nameList
    nameList.push(furst + " " + lust)
    this.setState({
      nameList: nameList
    })
  }
  render () {
    const allNames = this.state.nameList.map((element, i) => {
      return <NameList names={element} key={i} />
  })
    return (
      <div className="App">
          <NameInput clicked={this.addName}/>
          <NameList names={this.state.names}/>
          {allNames}
      </div>
    );
  }
}

export default App;