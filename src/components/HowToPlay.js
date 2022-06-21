/*
  Simply returns instructions on how the game works
*/
const HowToPlay = (props) => {

    return(

        <div>
            <h2>How to Play</h2>

            <p>Welcome to the Hangman game</p>

            <p>The game will select a random word.</p>
            <p>Use the keyboard to select the letters you think the word may contain.</p>
            <p>If you are correct, the letter will be loaded into the correct blanks above the keyboard.</p>
            <p>If you make 7 wrong guesses, you will loose.</p>
            <p>If you do loose, never fear you can play again!</p>

        </div>


    )

}

export default HowToPlay