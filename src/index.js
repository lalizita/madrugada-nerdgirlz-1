import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Crushs from './componentes/Crushs'
import axios from 'axios'

const element = <h1>Hello World!</h1>

function Componente(props){
  return (
    <div>
      <h1>Hello world 2</h1>
      <h3>outra linha</h3>
    </div>
  )
}

class ListaDeCrushs extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listaDeCrushs: []
    }
  }

  componentWillMount(){
    this.getCrushs()
  }

  getCrushs(){
    return axios.get(`https://crush-management.herokuapp.com/api/crushs`)
    .then(results => {
      const lista = results.data.result
      this.setState({listaDeCrushs: lista})
      // console.log(lista)
    })
    .catch(err => console.log(err))
  }

  render(){
    const {listaDeCrushs} = this.state
    return (
      <div>
        {
        listaDeCrushs.map((crush, index) => {
          return <Crushs key={index} nome={crush.nome} apelido={crush.apelido} foto={crush.foto} whatsapp={crush.whatsapp}/>
        })
      }
      </div>
    )
  }
}

ReactDOM.render(<ListaDeCrushs/>, document.getElementById('root'));