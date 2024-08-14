import React, {Component} from 'react';
import '../../App.css'
import firebase from '../../Firebase';

class Cadastro extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      titulo: "Cadastro",
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      email: "",
      password: "",
      mensagem: "" 
    }
    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
  }                               

  async cadastrarUsuario(){
    
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then( async (retorno) => {

      await firebase.firestore().collection("usuarios").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento
      })

      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        window.location.href = "./login"
      })

    });
  
  }

  render(){
    return (
      <div className="App">
        <header className="Cadastro">
          <h1> {this.state.titulo} </h1>
          <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome:e.target.value})} /><br/>
          <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome:e.target.value})} /><br/>
          <input type="date" onChange={(e) => this.setState({dataNascimento:e.target.value})} /><br/>
          <input type="text" placeholder="Email" onChange={(e) => this.setState({email:e.target.value})} /><br/>
          <input type="password" placeholder="Senha" onChange={(e) => this.setState({password:e.target.value})} /><br/>
          <button onClick={this.cadastrarUsuario}>Cadastrar usuário</button>
        </header>
      </div>
    )
  }

}

export default Cadastro;


