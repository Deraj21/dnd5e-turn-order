import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';



class App extends Component {
  constructor(){
    super();

    this.state = {
      characterData: [
        {
          name: "Welby",
          initiative: 12
        }
      ]
    }

    this.updateCharacter = this.updateCharacter.bind(this)
    this.onSort = this.onSort.bind(this)
    this.addCharacter = this.addCharacter.bind(this)
    this.next = this.next.bind(this)
  }

  addCharacter(){
    let newData = [...this.state.characterData]
    newData.push({
      name: "",
      initiative: 1,
      id: this.state.characterData.length
    })

    this.setState({
      characterData: newData
    })
  }

  updateCharacter(props){
    // update character
    let { id } = props
    let newData = [...this.state.characterData]
    let i = newData.findIndex(data => data.id === id)
    newData[i] = Object.assign({}, newData[i], props)

    // validate
    let init = newData[i].initiative
    if (init){ 
      newData[i].initiative = init > 99 ? 99 : init < 1 ? 1 : init
    }

    this.setState({
      characterData: newData
    })
  }

  onSort(){
    let sortedData = [...this.state.characterData]
    sortedData.sort((a, b) => b.initiative - a.initiative)
    this.setState({
      characterData: [...sortedData]
    })
  }

  next(){
    let advanced = [...this.state.characterData]
    let front = advanced.shift()
    advanced.push(front)

    this.setState({
      characterData: advanced
    })
  }

  render(){
    let { characterData } = this.state
    let characters = characterData.map((c, i) => {
      return (
        <Character name={c.name} initiative={c.initiative} key={`character-${c.id}`} id={c.id} updateCharacter={this.updateCharacter}/>
      )
    })
    
    return (
      <div className="App">
        <div className="toolbar">
          <h2>Turn Order</h2>
          <div className="btn-box">
            <button onClick={this.addCharacter}>Add</button>
            <button onClick={this.onSort}>Sort</button>
            <button onClick={this.next}>Next Turn</button>
          </div>
        </div>
        
        {/* Character List */}
        <div className="characterList">
          { characters }
        </div>

      </div>
    )
  }
}

export default App;
