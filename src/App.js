import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import axios from "axios";
import _ from 'lodash';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

//Pagina donde se extraen los datos json
//https://jsonplaceholder.typicode.com/
const url = "https://jsonplaceholder.typicode.com/users";
const url_comentarios = "https://jsonplaceholder.typicode.com/comments";
/*const url1 = "https://api.datos.gob.mx/v1/data-core";
const url2 = "https://jesusmiguel.free.beeceptor.com/"
const url3 = "http://localhost/api";*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };

    this.renderUsers = this.renderUsers.bind(this);
  }
  peticionGet = () => {
    axios.get(url).then(({ data }) => {
      this.setState(
        { array: data }
      );
    }).catch((err) => {
      console.log("No se pudieron obtener los datos del API.")
    })
  }
  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
        <br />
        <button className="btn btn-success">Agregar Empresas</button>
        <br /><br />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Username</th>
              <th>City</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUsers()}
          </tbody>
        </table>
      </div>
    );
  }

  renderUsers() {
    return _.map(this.state.array, dato => {
      return (
        <tr key={dato.id}>
          <td>{dato.id}</td>
          <td>{dato.name}</td>
          <td>{dato.username}</td>
          <td>{dato.address.city}</td>
          <td>
            <button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}/></button>
            {"   "}
            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/></button></td>
        </tr>
      );
    });
  }



}
export default App;
