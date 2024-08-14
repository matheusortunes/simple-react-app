import React, {Component} from 'react';
import '../../App.css'
import firebase from '../../Firebase';

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      titulo: "Login",
      email: "",
      password: ""
    }

    this.login = this.login.bind(this);
  }                               

  async login(){

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
        window.location.href = "./home"
    })
    .catch((erro) => {
      alert("Usuário ou senha incorretos")
    })

  }

  render(){
    return (
      <div className="App">
        <header className="Login">
          <h1> {this.state.titulo} </h1>
          <input type="text" placeholder="Email" onChange={(e) => this.setState({email:e.target.value})} /><br/>
          <input type="password" placeholder="Senha" onChange={(e) => this.setState({password:e.target.value})} /><br/>
          <button onClick={this.login}>Login</button>
        </header>
      </div>
    )
  }

}

export default Login;


