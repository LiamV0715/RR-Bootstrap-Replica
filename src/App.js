import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import StoreListings from './components/StoreListings'


function App() {
  return (
    <div className="App">
      
      <Navbar
        bg="light"
        expand="lg"
        style={{
          display: "flex",
          "flex-direction": "row",
          margin: "2px",
          "background-color": "whitesmoke", //example of quotes css to contain dash
          padding: "30px", //doesn't need quotes
          justifyContent: "space-around", //example of camel case react version (both work!)
        }}
      >
        <Navbar.Brand style={{ margin: "5px 0 0 20px", padding: '10px'}} href="#home">
          <img src="https://1000logos.net/wp-content/uploads/2023/04/Instacart-Emblem.png" style={{maxHeight: '30px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          
            <Nav.Link href="#LogIn" className="mr-auto">
              Log In
            </Nav.Link>
            <Button variant="success">Sign Up</Button>{" "}
          
        </Navbar.Collapse>
      </Navbar>
      <Card
        style={{
          width: "99%",
          minHeight: "400px",
          "background-image":
            'url("https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg")',
        }}
        fluid
        class="parallax-container"
      >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body
          style={{
            fontSize: "20px",
            paddingTop: "50px",
            paddingRight: "300px",
            background: 'rgba(51, 170, 51, .4)'
          }}
        >
          <Card.Title style={{ fontSize: "30px", "font-weight": "bold" }}>
            Order some groceries!! Or don't! I wont judge... or will I? 0_____0
          </Card.Title>
          <Card.Text>Whatever you want from stores and mores!</Card.Text>
          <div style={{
            display: 'flex',
            maxHeight: '40px',
            fontSize: '10px',
            paddingRight: '300px',
            paddingLeft: '100px'
          }}>
            <h1>Enter your address!</h1>
          <Form.Control
          aria-label="Address"
          aria-describedby="inputGroup-sizing-default"
        />
        </div>
        </Card.Body>
      </Card>
      <StoreListings />
    </div>
  );
}

export default App;
//background image address: https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg
