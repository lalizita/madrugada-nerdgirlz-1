import React, { Component } from 'react'

class Crushs extends Component {
  render() {
    const { nome, apelido, foto, whatsapp } = this.props
    return (
      <div>
        <hr/>
        <h3>{nome}</h3>
        <h3>{apelido}</h3>
        <h3>{whatsapp}</h3>
        <img src={foto} alt=""/>
      </div>
    )
  }
}

export default Crushs