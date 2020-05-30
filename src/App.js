import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './App.css';
import Home from './components/Home'
import NuevaCuenta from './components/auth/NuevaCuenta';
import tokenAuth from './config/token'
import RutaPrivada from './components/rutas/RutaPrivada'
import Turnero from './components/Turnero';
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import TurnoState from './context/turnos/turnoState'
import Login from './components/auth/Login'

// Revisar si tenemos un token
const token = localStorage.getItem('token')

if (token) {
  tokenAuth(token)
}

class App extends Component {

  render() {
    return (
      <AlertaState>
        <AuthState>
          <TurnoState>
            <Router>
              <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/nueva-cuenta' component={NuevaCuenta} />
                <RutaPrivada path='/home' component={Home} />
                <RutaPrivada path='/turnero' component={Turnero} />
              </Switch>
            </Router>
          </TurnoState>
        </AuthState>
      </AlertaState>
    );
  }

}

export default App;
