/*The App-header component returns the header and a
  button to view instructions or return to game  
*/
import { Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import {
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const AppHeader = (props) => {

return(
    <header className="App-header">
    <Row className="align-items-center">
      <Col xs="auto">
        <img src={logo} className="App-logo" alt="logo" />
      </Col>
      <Col>
        <h1>Lets play Hangman</h1>
      </Col>
      <Col xs="auto">
        <Routes>
            <Route path="/" element={<Link className="btn btn-info" to="/howtoplay">How to play</Link>} />
            <Route path="/howtoplay" element={<Link className="btn btn-info" to="/">Back to the game</Link>} />
        </Routes>    
      </Col>          
    </Row>
  </header>
  
)

}

export default AppHeader;