/*
  The Dahsboard component returns the game status
  and the button to restart the game
*/
import { Row, Col, Button } from "react-bootstrap";

const Dashboard = (props) => {
  const message = {};

  if (props.gameStatus === null) {
    if (props.totalTries === 0) {
      message.text = "Let's play!";
      message.className = "text-info";
    } else {
      message.text = "Keep going";
      message.className = "text-info";
    }
  }
  if (props.gameStatus === "won") {
    message.text = "You are the winner!";
    message.className = "text-success";
  }
  if (props.gameStatus === "lost") {
    message.text = "Sorry, you loose!";
    message.className = "text-danger";
  }

  return (
    <Row className="bg-light p-2">
      <Col>
        <h3 className={message.className}>{message.text}</h3>
      </Col>
      <Col>
        <Button onClick={props.handleReset}>Start new game</Button>
      </Col>
    </Row>
  );
};

export default Dashboard;
