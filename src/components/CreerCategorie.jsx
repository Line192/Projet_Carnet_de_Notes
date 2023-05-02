import React from "react";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Ajouter = ({ modal, toggle, save }) => {
const [cathégorie, setCathégorie] = useState("");


  const echange = (e) => {
    const { name, value } = e.target;
  
    if (name === "cathégorie") {
      setCathégorie(value);
    }
   
  };

  const sauvegarder = () => {
    let objet = {};
    objet["Cathégorie"] = cathégorie;
    save(objet);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Ajouter une Carégorie</ModalHeader>
      <ModalBody>
        <form>

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
