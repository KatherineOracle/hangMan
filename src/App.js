/*
This is the root component of my Hangman App


*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Drawing from "./components/Drawing";
import { Component } from "react";
import Dashboard from "./components/Dashboard";
import WordPad from "./components/Wordpad";
import Keyboard from "./components/Keyboard";
import AppHeader from "./components/AppHeader";
import HowToPlay from "./components/HowToPlay";
import "./App.css";
const dictionaryfile = require("./dictionary.txt");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningWord: "",
      winningSetLength: [],
      goodChoices: [],
      badChoices: [],
      gameStatus: null,
      loaded: false,
      error: null,
    };
    this.dictionary = [];
    this.letterSelectHandler = this.letterSelectHandler.bind(this);
    this.resetButtonHandler = this.resetButtonHandler.bind(this);
  }

  /* 1) on first load only
     store the dictionary text file into an array.
     if sucessful we move to the reset function 
  */
  async componentDidMount() {
    try {
      const response = await fetch(dictionaryfile);
      const text = await response.text();
      const dictionaryArr = text.split(/\r?\n/);
      dictionaryArr.splice(0, 4); // Courtousy to source is in the first four lines of the text file
      this.dictionary = [...dictionaryArr];
      this.setState({ loaded: true }, this.reset());
    } catch (e) {
      this.setState({ error: e, loaded: true });
    }
  }

  /*
     2) Reset function selects a new word randomly from the apps dictionary array 
     then resets all the state properties for a new game.
     This happens on component mount and when the user starts a new game. 
  */
  reset() {
    const randomNumber = Math.floor(Math.random() * this.dictionary.length);
    const winningWord = this.dictionary[randomNumber];

    //convert winning word into set of unique letters only and get size
    const winningLetterSet = new Set([...winningWord.toLowerCase().split("")])
      .size;

    this.setState({
      winningWord: winningWord,
      winningSetLength: winningLetterSet,
      goodChoices: [],
      badChoices: [],
      gameStatus: null,
      loaded: true,
    });
  }

  /*
     3) When user clicks "Start new game"
     call function above to reset state 
     to default values.
  */
  resetButtonHandler() {
    this.setState(this.reset());
  }

  /*
     4) When user clicks any letter.
     check if letter is in the "winningSet"
     yes = add to good choices list
     no - add to bad choices list

     user has 7 chances - if limit reached set game status to 'lost'
     if the user has found all the letters, the good choice array length 
     will equal the winning set length and game status can be set to 'won'
     
     Save updated data back to state
  */
  letterSelectHandler(char) {
    let newGoodChoices = [...this.state.goodChoices];
    let newBadChoices = [...this.state.badChoices];

    //check if letter choice was a good choice or a bad one
    if (this.state.winningWord.indexOf(char) > -1) {
      newGoodChoices.push(char);
    } else {
      newBadChoices.push(char);
    }

    let newStatus = null;
    if (newBadChoices.length >= 7) {
      newStatus = "lost";
    }
    if (newGoodChoices.length >= this.state.winningSetLength) {
      newStatus = "won";
    }

    this.setState({
      goodChoices: [...newGoodChoices],
      badChoices: [...newBadChoices],
      gameStatus: newStatus,
    });
  }

  render() {
    if (this.state.loaded === false) {
      return <p>Loading</p>;
    }
    if (this.state.error != null) {
      return <p>Something went wrong</p>;
    }

    //render app and manage route between game and instructions url
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <main>
            <Container>
              <Row>
                <Col xs="auto">
                  <Drawing badChoices={this.state.badChoices} />
                </Col>
                <Col>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <div>
                          <Dashboard
                            gameStatus={this.state.gameStatus}
                            totalTries={
                              this.state.goodChoices.length +
                              this.state.badChoices.length
                            }
                            handleReset={this.resetButtonHandler}
                          />
                          <WordPad
                            winningWord={this.state.winningWord}
                            gameStatus={this.state.gameStatus}
                            goodChoices={this.state.goodChoices}
                          />
                          <Keyboard
                            goodChoices={this.state.goodChoices}
                            gameStatus={this.state.gameStatus}
                            badChoices={this.state.badChoices}
                            handleLetterSelect={this.letterSelectHandler}
                          />
                        </div>
                      }
                    />
                    <Route path="/howtoplay" element={<HowToPlay />} />
                  </Routes>
                </Col>
              </Row>
            </Container>
          </main>
          <footer className="App-footer">
            <p className="text-center">
              Built by Katherine Van As at the HyperionDev School
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
