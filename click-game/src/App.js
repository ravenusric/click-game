import React, { Component } from "react";
import Wrestlers from "./components/WrestlerCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./Navbar.js";
import wrestlers from "./wrestlers.json";

// Shuffle for the wrestlers, each time one is clicked they will shuffle 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    wrestlers,
    score: 0,
    topScore: 0,
    clickedWrestlers: []
  };

  clickedImage = id => {
    let clickedWrestlers = this.state.clickedWrestlers;
    let score = this.state.score;
    let topScore = this.state.topScore;

    // if the clicked image has an id of the indexed wrestlers
    if (clickedWrestlers.indexOf(id) === -1) {
      // push id
      clickedWrestlers.push(id);
      console.log(clickedWrestlers);

      this.handleIncrement();
      //function to shuffle after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      alert("You Win! Now You Are The Champion")
      this.setState({
        score: 0,
        clickedWrestlers: []
      });
    } else {
      this.setState({
        score: 0,
        clickedWrestlers: []
      });
      console.log("Oops! Got Greedy")
      alert("1.2.3! You Just Lost, Punk!")
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }
  }

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ wrestlers: shuffle(wrestlers) })
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />


        <Wrapper>
          {this.state.wrestlers.map(wrestler => (
            <Wrestlers
              key={wrestler.id}
              id={wrestler.id}
              name={wrestler.name}
              image={wrestler.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
