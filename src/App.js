import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import puns from './puns.json'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Footer from './components/Footer'
import PunCard from './components/PunCard'

class App extends Component {
  state = {
    message: "Click any pun card to begin!",
    topScore: 0,
    currentScore: 0,
    puns: puns,
    unselectedPuns: puns
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectPun = punny => {
    const findPun = this.state.unselectedPuns.find(item => item.punny === punny);

    if (findPun === undefined) {
      // failure to select a new pun
      this.setState({
        message: "WRONG!",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        puns: puns,
        unselectedPuns: puns
      });
    }
    else {
      // success to select a new pun
      const newPuns = this.state.unselectedPuns.filter(item => item.punny !== punny);

      this.setState({
        message: "CORRECT!",
        currentScore: this.state.currentScore + 1,
        puns: puns,
        unselectedPuns: newPuns
      });
    }

    this.shuffleArray(puns);
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.puns.map(pun => (
            <PunCard
              punny={pun.punny}
              image={pun.image}
              selectPun={this.selectPun}
              currentScore={this.state.currentScore}
            />
          ))
        }
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
