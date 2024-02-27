import "./index.css"

import { PiHandsClapping } from "react-icons/pi";

const SuccessScreen=()=>{

    const getNameFromLocalStorage=()=>{
        const name=localStorage.getItem("name")
        const parseItem=JSON.parse(name)
        return parseItem
    }
    const getScoreFromLocalStorage=()=>{
        const score=localStorage.getItem("score")
        const parseScore=JSON.parse(score)
        return parseScore
    }
    const getTimeFromLocalStorage=()=>{
        const time=localStorage.getItem("time")
        const parseTime=JSON.parse(time)
        return parseTime
    }
        return (<div className="bg-container">
            <h1 className="Play-board-heading">Mahajong Game</h1>
            <nav className="nav-container">
                <h1 className="score">Score:{getScoreFromLocalStorage()}</h1>
                <h1 className="score">{getTimeFromLocalStorage()}</h1>
            </nav>
            <div className="play-board-container">
                <div className="name-display-container">
                    <h1 className="name-display">{`Welcome ${getNameFromLocalStorage()}`} <span>{<PiHandsClapping />}</span><span>{<PiHandsClapping />}</span></h1>
                    <div className="result-container">
                        <h1 className="finish-heading">Game Finished!</h1>
                        <h1 className="result-score">{`Score: ${getScoreFromLocalStorage()}`}</h1>
                        <h1 className="result-score">{`Time Taken: ${getTimeFromLocalStorage()}`}</h1>
                    </div>
                </div>
            </div>
        </div>)
    }

export default SuccessScreen