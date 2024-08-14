import React, {Component} from 'react';
import '../../App.css'
import firebase from '../../Firebase';

class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      titulo: "Home",
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    }
  }

  async componentDidMount(){

    await firebase.auth().onAuthStateChanged(async (usuarios) => {

      if(usuarios){
        var uid = usuarios.uid

        await firebase.firestore().collection("usuarios").doc(uid).get()
        .then((retorno) => {
          
          this.setState({
            nome: retorno.data().nome,
            sobrenome: retorno.data().sobrenome,
            dataNascimento: retorno.data().dataNascimento
          })

        });

      }

    })

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Olá {this.state.nome} {this.state.sobrenome} </h1>
          <h1> {this.state.dataNascimento} </h1>
        </header>
      </div>
    )
  }

}

export default Home;

