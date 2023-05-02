import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./card.css";
const Card = ({ objet, index}) => {
  const colors = [
    {
      primarColor: "#007bff",
      secondaryColor: "#17a2b8",
    },
    {
      primarColor: "#28a745",
      secondaryColor: "#ffc107",
    },
    {
      primarColor: "#dc3545",
      secondaryColor: "#343a40",
    },
    {
      primarColor: "#ffffff",
      secondaryColor: "#343a40",
    },
    {
      primarColor: "#6c757d",
      secondaryColor: "#f8f9fa",
    },
  ];
 

  
  return (
    <div className="content">
      <div className="card-wrapper mr-5">
        <div
          className="card-top"
          style={{ "background-color": colors[index % 5].primarColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{ "background-color": colors[index % 5].primarColor }}
          >
            {objet.Name}
          </span>
          <p className="mt-2">{objet.Cathégorie}</p>

          <p className="mt-2">{objet.Zone_de_text}</p>

          <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
            <li
              className="far fa-edit  mr-3"
              style={{ color: colors[index % 5].primarColor }}
            ></li>
            <li
              className="fas fa-trash-alt"
              style={{ color: colors[index % 5].primarColor }}
            ></li>
          </div>
        </div>
      </div>
    

    </div>
  );
};

export default Card;
