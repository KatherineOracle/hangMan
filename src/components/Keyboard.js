/*
  Returns buttons for all the letters in the alphabet 
  Once a button is clicked it is set to disabled  
  A correct choice is highlighted green
  A bad choice is highlighted green
  
  When the game is over all the button are set to disabled.    
*/
import { Row, Button } from "react-bootstrap";
import "../styles/Keyboard.css";

const Keyboard = (props) => {
  const charArr = [];

  for (let i = 97; i <= 122; i++) {
    let char = String.fromCharCode(i);
    let disabled = false;
    let variant = "secondary";
    if (props.goodChoices.indexOf(char) !== -1) {
      disabled = true;
      variant = "outline-success";
    }
    if (props.badChoices.indexOf(char) !== -1) {
      disabled = true;
      variant = "outline-danger";
    }

    //if the game is over, disable all the buttons!
    if (props.gameStatus != null) {
      disabled = true;
    }

    charArr.push({
      char: String.fromCharCode(i),
      disabled: disabled,
      variant: variant,
    });
  }

  return (
    <Row className="keyboard flex-wrap g-1 justify-content-center">
      {charArr.map((char, idx) => {
        return (
          <Button
            key={"char-" + idx}
            className="col"
            onClick={(e) => props.handleLetterSelect(char.char)}
            variant={char.variant}
            disabled={char.disabled}
          >
            {char.char}
          </Button>
        );
      })}
    </Row>
  );
};

export default Keyboard;
