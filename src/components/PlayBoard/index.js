import "./index.css"
import {Component} from "react"
import { PiHandWavingFill } from "react-icons/pi";
import Tiles from "../Tiles"

const iconsList=[
    {
        id:1,category:"flower",imgUrl:"https://img.hotimg.com/downloadc2c1431ea111fb65.jpeg"

    },
    {
        id:2,category:"gift",imgUrl:"https://img.hotimg.com/party-popper-emoticon-face-vector.jpeg"
    }
]   

const tilesList=[
    {id:1,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:2,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:3,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:4,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:5,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:6,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:7,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:8,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:9,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:10,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:11,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:12,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:13,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:14,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:15,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:16,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:17,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:18,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:19,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:20,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:21,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:22,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:23,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:24,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:25,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:26,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:27,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:28,image:iconsList[0].imgUrl,category:"flower",isRevealed:false},
    {id:29,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:30,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:31,image:iconsList[1].imgUrl,category:"gift",isRevealed:false},
    {id:32,image:iconsList[0].imgUrl,category:"flower",isRevealed:false}
    
    

]

let scoreList=[]

class PlayBoard extends Component{
    state={score:0,
        timeElapsedInSeconds:0,
        initialTilesList:tilesList,
        count:0}

    componentDidMount(){
        this.startSeconds()
    }
    componentWillUnmount() {
        this.clearTimerInterval()
      }

      clearTimerInterval = () => clearInterval(this.timerId)

    startSeconds=()=>{
        this.timerId=setInterval(this.increaseSeconds,1000)
    }

    onRevealButtons = id => {
        const {initialTilesList,score}=this.state
        const element=initialTilesList.filter(eachItem=>(eachItem.id===id))
        if(element[0].category==="flower"){
            scoreList.push(1)

        }else{
            scoreList.push(0)
        }
        if (scoreList.length===2){
            if (scoreList[0]===scoreList[1]){
                console.log("clicked")
                this.setState({score:score+1})
            }else{
                if (score>0){
                    this.setState(prevState=>({score:prevState.score-1}))
                }
            }
            scoreList=[]


        }

        this.setState(prevState => ({
            initialTilesList: prevState.initialTilesList.map(eachItem => {
            if (id === eachItem.id) {
              return {...eachItem, isRevealed: !eachItem.isRevealed}
            }
            return eachItem
          }),count:prevState.count+1
        }))
      }

    increaseSeconds=()=>{
        const {timeElapsedInSeconds}=this.state
        this.setState({timeElapsedInSeconds:timeElapsedInSeconds+1})

    }

    setTime=()=>{
        const {count,score,timeElapsedInSeconds}=this.state
        const {history}=this.props
        const minutes=Math.floor(timeElapsedInSeconds/60)
        const seconds=Math.floor(timeElapsedInSeconds%60)
        const minute=minutes<=9?`0${minutes}`:minutes;
        const second=seconds<=9?`0${seconds}`:seconds;
        const time=`${minute}:${second}`
        if (count===32){
            this.clearTimerInterval()
            localStorage.setItem("score",JSON.stringify(score))
            localStorage.setItem("time",JSON.stringify(time))
            history.push("/gameover")
        }
        return `${minute}:${second}`

    }

    getNameFromLocalStorage=()=>{
        const name=localStorage.getItem("name")
        const parseItem=JSON.parse(name)
        return parseItem
    }

    
    render(){
        const {initialTilesList,score}=this.state
        return (<div className="bg-container">
            <h1 className="Play-board-heading">Mahajong Game</h1>
            <nav className="nav-container">
                <h1 className="score">Score:{score}</h1>
                <h1 className="score">{this.setTime()}</h1>
            </nav>
            <div className="play-board-container">
                <div className="name-display-container">
                    <h1 className="name-display">{`Welcome ${this.getNameFromLocalStorage()} `} {<PiHandWavingFill />} {<PiHandWavingFill />} </h1>
                    <div className="tiles-container">
                        {initialTilesList.map(eachItem=>(
                            <Tiles key={eachItem.id} details={eachItem} onRevealButtons={this.onRevealButtons}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default PlayBoard