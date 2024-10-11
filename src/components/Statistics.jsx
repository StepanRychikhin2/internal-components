import { render } from "@testing-library/react";
import styled from "./Stats.module.css"
import React, { Component } from "react";
import { useState } from 'react';
const  Stast = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    // }
   const addGood = () => {
        // this.setState({ good: this.state.good + 1 })
        setGood(good + 1)
        // const content = document.getElementById('content');
        // console.log(content)
        // content.classList.toggle('hidden');
    }
    const  addNaturel = () => {
        // this.setState({ neutral: this.state.neutral + 1 })
        setNeutral(neutral + 1)
    }
    const addBad = () => {
        // this.setState({ bad: this.state.bad + 1 })
        setBad(bad + 1)
    }
    const emoji = (num) => {
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


    function positiveFeedback() {
        let Total = good + neutral + bad;
        const positive = good;
        return Total === 0 ? 0 : (positive / Total) * 100;
    }

    return(

    
            <>
            <div className={styled.list}>
            <button className={styled.btn} onClick={addGood} >good</button>
                <button className={styled.btn} onClick={addNaturel}>neutral</button>
                <button className={styled.btn} onClick={addBad}>bad</button>
            </div>
               <h1>Statistics</h1>
                <p className={styled.text} >good: <span>{good}</span>😀</p>
                <p className={styled.text}>neutral: <span>{neutral}</span>😑</p>
                <p className={styled.text}>bad: <span>{bad}</span>😭</p>
                <p className={styled.text}>Total: <span>{good + neutral + bad}</span></p>
                <p className={styled.text}>Feedback positive: <span>{Math.trunc(positiveFeedback())}%</span>{emoji(Math.trunc(positiveFeedback()))}</p>
           
           </>

    )
}
export default Stast;











