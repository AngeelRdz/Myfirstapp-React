import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Navigation from './components/Navigation';

import { tareas } from './tareas.json';
//console.log(tareas);

// subcomponents
import TareasForm from './components/TareasForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    }
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  removeTarea(index) {
    if(window.confirm('¿Estas seguro?')){
      this.setState({
        tareas: this.state.tareas.filter((e, i) => {
          return i !== index
        })
      });
    }
  }

  handleAddTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ tarea.title }</h3>
              <span className="badge bagde-pill badge-danger ml-2">
              { tarea.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ tarea.description }</p>
              <p><mark>{ tarea.responsible }</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTarea.bind(this, i)}>
                Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Tareas
              <span className="badge bagde-pill badge-light ml-2">
                { this.state.tareas.length }
              </span>
            </a>
          </nav>

          <div className="container">
            <div className="row mt-4">

              <div className="col-md-3 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TareasForm onAddTarea={this.handleAddTarea}></TareasForm>
              </div>

              <div className="col-md-9">
                <div className="row">
                  { tareas }
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
