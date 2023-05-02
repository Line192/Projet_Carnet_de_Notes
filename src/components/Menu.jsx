import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu/Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* --------------------------------------------------------------------------------- 
    ----------------------------------- Card1-----------------------------------------
    ---------------------------------------------------------------------------------  */}

          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://img.icons8.com/color/480/000000/notepad.png"
                className="rounded float-start"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">Carnet de note 1</h5>
                <Link to="/Notes">
                  <a href="planning" className="btn btn-primary">
                    Ajouter des notes
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------- 
    ----------------------------------- Card2-----------------------------------------
    ---------------------------------------------------------------------------------  */}
          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://img.icons8.com/color/480/000000/notepad.png"
                className="rounded float-start"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">Carnet de note 2</h5>
                <Link to="/Notes">
                  <a href="planning" className="btn btn-primary">
                    Ajouter des notes
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------- 
    ----------------------------------- Card3-----------------------------------------
    ---------------------------------------------------------------------------------  */}
          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://img.icons8.com/color/480/000000/notepad.png"
                className="rounded float-start"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">Carnet de note 3</h5>
                <Link to="/Notes">
                  <a href="planning" className="btn btn-primary">
                    Ajouter des notes
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------- 
    ----------------------------------- Card4-----------------------------------------
    ---------------------------------------------------------------------------------  */}
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://img.icons8.com/color/480/000000/notepad.png"
                className="rounded float-start"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">Carnet de note 4</h5>
                <Link to="/Notes">
                  <a href="planning" className="btn btn-primary">
                    Ajouter des notes
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------- 
    ----------------------------------- Card5-----------------------------------------
    ---------------------------------------------------------------------------------  */}
          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://img.icons8.com/color/480/000000/notepad.png"
                className="rounded float-start"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">Carnet de note 5</h5>
                <Link to="/Notes">
                  <a href="planning" className="btn btn-primary">
                    Ajouter des notes
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------- 
    ----------------------------------- Card6-----------------------------------------
    ---------------------------------------------------------------------------------  */}

          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://img.icons8.com/color/480/000000/notepad.png"
                className="rounded float-start"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">Carnet de note 6</h5>
                <Link to="/Notes">
                  <a href="planning" className="btn btn-primary">
                    Ajouter des notes
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
