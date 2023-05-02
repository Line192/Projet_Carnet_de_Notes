import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { Link } from "react-router-dom";

import React from "react";

export default function NavBar() {
  return (
    <div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/Menu">
              <a className="nav-link active" aria-current="page" href="Accueil">
                Page-Home
              </a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="lienn"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/Menu">
                  <a className="dropdown-item" href="lienn">
                    Menu
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Notes">
                  <a className="dropdown-item" href="lienn">
                    Saisie de note
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Categorie">
                  <a className="dropdown-item" href="lienn">
                    Creer Categorie
                  </a>
                </Link>
              </li>

              <li>
                <a className="dropdown-item" href="lienn">
                  Autres applications
                </a>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="lienn">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
