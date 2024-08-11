import { render } from "@testing-library/react";
import styled from "./Stats.module.css"
import React, { Component } from "react";

class Stast extends Component {

    state = {
        good: 0,
        natural: 0,
        bad: 0,
    }
    addGood = () => {
        this.setState({ good: this.state.good + 1 })
    }
    addNaturel = () => {
        this.setState({ natural: this.state.natural + 1 })
    }
    addBad = () => {
        this.setState({ bad: this.state.bad + 1 })
    }

    render() {
        const { good, natural, bad } = this.state;

        function positiveFeedback() {
            let Total = good + natural + bad;
            const positive = good;
            return Total === 0 ? 0 : (positive / Total) * 100;
          }
          
        return (

            <>
                <button onClick={() => this.addGood()} >good</button>
                <button onClick={() => this.addNaturel()}>natular</button>
                <button onClick={() => this.addBad()}>bad</button>
                <p>good: <span>{good}</span></p>
                <p>natural: <span>{natural}</span></p>
                <p>bad: <span>{bad}</span></p>
                <p>Total: <span>{good + natural + bad}</span></p>
                <p>Feedback positive: <span>{Math.trunc(positiveFeedback())}%</span></p>
            </>
        )
    }

}


export default Stast;











