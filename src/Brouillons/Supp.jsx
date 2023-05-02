import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import MarkdownView from "react-showdown";

export default function Ajouter({ notes, setNotes }) {
  const navigate = useNavigate();
  const [titre, setTitre] = useState(" ");
  const [cathégorie, setCathégorie] = useState(" ");
  const [zone_de_text, setZone_de_text] = useState(" ");

  function valider() {
    axios
      .post("/note", {
        id: notes.length + 1,
        titre: titre,
        cathégorie: cathégorie,
        zone_de_text: zone_de_text,
      })
      .then((res) => {
        setNotes(res.data.notes);
      });
    navigate("/");
  }
  return (
    <div>
      <div className="col-12">
        <label className="form-label">titre</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="form-control"
          id="inputTitre"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">cathégorie</label>
        <input
          type="text"
          value={cathégorie}
          onChange={(e) => setCathégorie(e.target.value)}
          className="form-control"
          id="inputCathégorie"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">zone_de_text</label>
        <input
          type="text"
          value={zone_de_text}
          onChange={(e) => setZone_de_text(e.target.value)}
          className="form-control"
          id="inputZone_de_text"
        />
        {/* <MarkdownView markdown={text} /> */}
      </div>
      <div className="col-12"></div>
      <button className="btn btn-secondary" onClick={() => valider()}>
        Valider
      </button>
    </div>
  );
}
