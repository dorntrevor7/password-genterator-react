import { Container, Row, Col, Button } from "react-bootstrap";
import Heading from "./Components/Heading.js";
import Password from "./Components/Password.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className="PasswordWrapper">
          <Col>
            <Row>
              <Heading className="Heading" />
            </Row>
            <Row>
              <Password className="Password" />
            </Row>
            <Row>
              <Button
                variant="outline-success"
                onClick={() => console.log("Clicked")}
              >
                Generate Password
              </Button>
              {}
            </Row>
          </Col>
        </Container>
      </header>
    </div>
  );
}

export default App;
