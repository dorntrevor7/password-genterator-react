import { Container, Row, Col, Button } from "react-bootstrap";
import Heading from "./Components/Heading.js";
import Password from "./Components/Password.js";
import "./App.css";
const Questions = () => {
  const start = alert("Would you like to generate a new password?");
  const up = alert("Would you like to upper case characters in your password?");
  const low = alert("Would you like to lowercase characters in your password?");
  const num = alert("Would you like numbers in your password?");
  const special = alert(
    "Would you like to special characters in your password?"
  );
};
function App() {
  let password = "";
  const generatePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const specialCaseLetters = "!@#$&";
    const numbers = "1234567890";
    const lowerCaseRandomizer = Math.floor(Math.random() * lowerCase.length);
    const upperCaseRandomizer = Math.floor(
      Math.random() * upperCaseLetters.length
    );
    const specialCaseRandomizer = Math.floor(
      Math.random() * specialCaseLetters.length
    );
    const numberRandomizor = Math.floor(Math.random() * numbers.length);
    for (var i = 0; i < length; i++) {
      password += upperCaseLetters.charAt(
        Math.floor(Math.random() * upperCaseLetters, length)
      );
    }
    return password;
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
