import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bouton extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/Test">
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </Link>
      </div>
    );
  }
}
