import React, { useEffect } from "react";
import { useState } from "react";
import Ajouter from "../components/Ajouter";
import Card from "../components/card";
import "./Notes.css";

const NoteList = () => {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    let a = localStorage.getItem("list");
    if (a) {
      let obj = JSON.parse(a);
      setList(obj);
    }
  }, []);

  const supprimer = (index) => {
    let tmp = list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(tmp));
    setList(tmp);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const enregistrer = (objet) => {
    let tmp = list;
    tmp.push(objet);
    localStorage.setItem("list", JSON.stringify(tmp));
    setList(tmp);
    setModal(false);
    setList(list);
  };

  return (
    <>
      <div className="container">
        <div className="header text-center">
          <h3>CARNET DE NOTES</h3>
        </div>
        <div className="task-container">
          {list &&
            list.map((obj, index) => (
              <Card objet={obj} index={index} supprimer={supprimer} />
            ))}
        </div>
        <Ajouter toggle={toggle} modal={modal} save={enregistrer} />
        <button
          className="btn btn-primary mt-2"
          onClick={(e) => setModal(true)}
        >
          Ajouter
        </button>
      </div>
    </>
  );
};
export default NoteList;
