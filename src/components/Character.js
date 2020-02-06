import React, { Component } from 'react'

class Character extends Component{
  constructor(props){
    super(props)

    this.state = {
      isEditingName: this.props.id % 2 === 0,
      isEditingInit: this.props.id % 2 === 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let binding = e.target.getAttribute("binding")
    let newProps = Object.assign({}, this.props)
    newProps[binding] = e.target.value

    this.props.updateCharacter(newProps)
  }

  render(){
    let { isEditingName, isEditingInit } = this.state
    let { name, initiative } = this.props

    return (
      <div className="Character">
        {
          isEditingName
          ?
          <input value={name} binding="name" onChange={this.handleChange}
            className="name-input" maxLength="30"
          />
          :
          <p>{name}</p>
        }
        {
          isEditingInit
          ?
          <input value={initiative} binding="initiative" onChange={this.handleChange}
            type="number" min="1" max="99" className="init-input"
          />
          :
          <p className="init-p">{initiative}</p>
        }
      </div>
    )
  }
}

export default Character