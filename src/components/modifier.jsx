import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";

export default function UsersFormUpdate() {
  const { id } = useParams();
  const { getUser, updateUser } = useContext(UsersContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUser(id));
  }, [id, getUser]);

  useEffect(() => {
    if (user === false) navigate("/users");
  }, [user, navigate]);

  function save(e) {
    e.preventDefault();
    updateUser(user);
    navigate("/users");
  }

  return (
    <div>
      {user !== undefined && (
          <div>
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
        // <Container className="mt-5">
        //   <Row>
        //     <Col>
        //       <h1>Formulaire Utilisateur ({user.username})</h1>
        //       <hr />
        //     </Col>
        //   </Row>
        //   <Row>
        //     <Col md="6">
        //       <Form onSubmit={(e) => save(e)}>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //           <Form.Label>Name</Form.Label>
        //           <Form.Control
        //             required
        //             type="text"
        //             placeholder="Ex : Michael Jackson"
        //             value={user.name}
        //             onChange={(e) => {
        //               let tmp = { ...user };
        //               tmp.name = e.target.value;
        //               setUser(tmp);
        //             }}
        //           />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //           <Form.Label>Username</Form.Label>
        //           <Form.Control
        //             required
        //             type="text"
        //             placeholder="Ex : Mj"
        //             value={user.username}
        //             onChange={(e) => {
        //               let tmp = { ...user };
        //               tmp.username = e.target.value;
        //               setUser(tmp);
        //             }}
        //           />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //           <Form.Label>Email</Form.Label>
        //           <Form.Control
        //             required
        //             type="email"
        //             placeholder="Ex : mj@epic.com"
        //             value={user.email}
        //             onChange={(e) => {
        //               let tmp = { ...user };
        //               tmp.email = e.target.value;
        //               setUser(tmp);
        //             }}
        //           />
        //         </Form.Group>
        //         <Button
        //           type="button"
        //           variant="outline-secondary"
        //           onClick={() => navigate("/users")}
        //         >
        //           Retour
        //         </Button>{" "}
        //         <Button
        //           type="reset"
        //           variant="secondary"
        //           onClick={() => setUser(getUser(id))}
        //         >
        //           Annuler
        //         </Button>{" "}
        //         <Button variant="success" type="submit">
        //           Enregistrer
        //         </Button>
        //       </Form>
        //     </Col>
        //   </Row>
        // </Container>
        
      )}
    </div>
  );
}
