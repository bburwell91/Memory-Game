import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log();
      });
    };
  this.state.characters.forEach(character => {
    character.count = 0;
  });
  alert(`Game Over! \nscore: ${this.state.score}`);
  this.setState({score: 0});
  return true;
}

clickTracker = id => {
  this.state.characters.find((o, i) => {
    if(o.id === id) {
      if(characters[i].count === 0) {
        characters[i].count = characters[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log();
        });
      this.state.characters.sort(() => Math.random() - 0.5)
      return true;
    } else {
      this.endGame();
    }
  }
  })
}

  // removeCharacter = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const characters = this.state.characters.filter(character => character.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ characters });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Super Smash Bros Click Game</Header>
        {this.state.characters.map(character => (
          <CharacterCard
            clickTracker={this.clickTracker}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
