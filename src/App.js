import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Navbar
        bg="light"
        expand="lg"
        style={{ display: "flex", 
        "flex-direction": "row", 
        margin: "2px", 
        "background-color": "whitesmoke", //example of quotes css to contain dash
        padding: '30px', //doesn't need quotes
        justifyContent: "space-around" //example of camel case react version (both work!)
      }}
      >
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src="[Instacart logo src]" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
