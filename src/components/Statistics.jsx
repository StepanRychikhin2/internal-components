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
        // const content = document.getElementById('content');
        // console.log(content)
        // content.classList.toggle('hidden');
    }
    addNaturel = () => {
        this.setState({ natural: this.state.natural + 1 })
    }
    addBad = () => {
        this.setState({ bad: this.state.bad + 1 })
    }
    emoji = (num) => {
        if (num >= 80 ) {
            return "🥰";
        }
       else if (num >= 60 && num < 80) {
            return "😀";
        } else if (num < 60 && num > 40) {
            return "😑";
        } else if (num <= 40 && num >= 30) {
            return "😦";
        } else if (num <= 30 && num > 15) {
            return "😥";
        } else if (num <= 15) {
            return "😭"
        }
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
            <div className={styled.list}>
            <button className={styled.btn} onClick={() => this.addGood()} >good</button>
                <button className={styled.btn} onClick={() => this.addNaturel()}>natular</button>
                <button className={styled.btn} onClick={() => this.addBad()}>bad</button>
            </div>
               
                <p className={styled.text} >good: <span>{good}</span>😀</p>
                <p className={styled.text}>natural: <span>{natural}</span>😑</p>
                <p className={styled.text}>bad: <span>{bad}</span>😭</p>
                <p className={styled.text}>Total: <span>{good + natural + bad}</span></p>
                <p className={styled.text}>Feedback positive: <span>{Math.trunc(positiveFeedback())}%</span>{this.emoji(Math.trunc(positiveFeedback()))}</p>
           
           
                {/* <p id="content" className={styled.hhh}>😭</p> */}
            </>
        )
    }

}


export default Stast;











