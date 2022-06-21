/*
The WordPad components returns "spaces" 
for each letter in the app-selected word 
When a letter is added to the goodchoices array it is 
displayed in the correct spaces

At the end of the game, unfound letters are displayed in red
*/

import { Row, Col } from "react-bootstrap";
import "../styles/Wordpad.css";

const WordPad = (props) => {
  const wordArr = props.winningWord.split("");

  return (
    <Row className="justify-content-center wordpad">
      {wordArr.map((letter, idx) => {
          let extraClass = '';
        if (props.goodChoices.indexOf(letter.toLowerCase()) === -1) {

          if(props.gameStatus === null){ //game still in progress
            letter = '\u00A0';
          } else { // game is over so we will show the missing letters in blue
            extraClass = ' text-danger';
          }          
        }
        return (
          <Col xs="auto" key={idx + "-" + letter} className={'letterbox'+extraClass}>
            {letter}
          </Col>
        );
      })}
    </Row>
  );
};

export default WordPad;
