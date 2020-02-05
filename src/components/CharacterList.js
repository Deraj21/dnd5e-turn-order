import React, { Component } from 'react'
import Character from './Character'

class CharacterList extends Component{
  render(){
    return (
      <div className="CharacterList">
        CharacterList

        <Character />
        <Character />
        <Character />
      </div>
    )
  }
}

export default CharacterList