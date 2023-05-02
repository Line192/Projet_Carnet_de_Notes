import React, { Component } from "react";
export default class Categorie extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: [],
    };
  }
  onChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  CreerCategorie(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.userInput],
    });
  }
  supprimerCategorie(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf[event.target.value];
    array.splice(index, 1);
    this.setState({
      items: array,
    });
  }
  renderCategorie() {
    return this.state.items.map((item) => {
      return (
        <div className="list-group-item" key={item}>
          {item}
          <button
            className="btn btn-primary"
            onClick={this.supprimerCategorie.bind(this)}
          >
            Modify
          </button>
          <button
            className="btn btn-danger"
            onClick={this.supprimerCategorie.bind(this)}
          >
            supprimer
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="">
        <h1 align="center">CATEGORIE</h1>
        <form className="form-row align-items-center">
          <input
            className="form-control mb-2 "
            //value= valeur de l'input null
            value={this.state.userInput}
            type="text"
            placeholder="saisir le nom de la catégorie"
            //onChange appelle la fonction onChange qui recoit event qui est connecté au clavier
            onChange={this.onChange.bind(this)}
            required
          />
          <button
            className="btn btn-success"
            onClick={this.CreerCategorie.bind(this)}
          >
            Creer
          </button>
        </form>
        <div className="list-group">{this.renderCategorie()}</div>
      </div>
    );
  }
}