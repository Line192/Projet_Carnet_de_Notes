import React from "react";
import { useState } from "react";
import MarkdownView from "react-showdown";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Ajouter = ({ modal, toggle, save }) => {
  const [titre, setTitre] = useState("");
  const [cathégorie, setCathégorie] = useState("");
  const [zone_de_text, setZone_de_text] = useState("");

  const echange = (e) => {
    const { name, value } = e.target;
    if (name === "titre") {
      setTitre(value);
    }
    if (name === "cathégorie") {
      setCathégorie(value);
    }
    if (name === "zone_de_text") {
      setZone_de_text(value);
    }
  };

  const sauvegarder = () => {
    let objet = {};
    objet["Name"] = titre;
    objet["Cathégorie"] = cathégorie;
    objet["Zone_de_text"] = zone_de_text;
    save(objet);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Ajouter une note</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Titre</label>
            <input
              type="text"
              className="form-control"
              value={titre}
              onChange={echange}
              name="titre"
              required
            />
          </div>
          <div className="form-group">
            <label>Cathégorie</label>
            <input
              type="text"
              className="form-control"
              value={cathégorie}
              onChange={echange}
              name="cathégorie"
              required
            />
          </div>
          <div className="form-group">
            <label>Zone de text</label>
            <textarea
              rows="5"
              className="form-control"
              value={zone_de_text}
              onChange={echange}
              name="zone_de_text"
              required
            ></textarea>
            <MarkdownView markdown={zone_de_text} />{" "}
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={sauvegarder}>
          Ajouter
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default Ajouter;
