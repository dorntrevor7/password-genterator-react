import { Container, Row, Col, Button } from "react-bootstrap";
import Heading from "./Components/Heading.js";
import Password from "./Components/Password.js";
import "./App.css";

function App() {
  let password = "";
  const generatePassword = () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const specialCase = "!@#$";
    const numbers = "1234567890";
  };
  return (
    <div className="App">
      <header className="App-header">
        <Container className="PasswordWrapper">
          <Col>
            <Row>
              <Heading className="Heading" />
            </Row>
            <Row>
              <Password className="Password" password={password} />
            </Row>
            <Row>
              <Button variant="outline-success" onClick={generatePassword}>
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
