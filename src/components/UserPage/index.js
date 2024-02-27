import {Component} from "react"
import {Link} from "react-router-dom"

import "./index.css"

class UserPage extends Component{

    state={name:""}

    onPlayButton=(event)=>{
        this.setState({name:event.target.value})
    }

    onStartGame=()=>{
        const {name}=this.state
        localStorage.setItem("name",JSON.stringify(name))
    }

    render(){
        const {name}=this.state
        console.log(name)
        
        return (<div className="bg-container">
            <h1 className="app-heading">React Tiles</h1>
            <div className="main-border-div">
                <h1 className="user-input-label-heading" >Enter Your Name</h1>
                <input className="username" type="text" placeholder="Enter your name" value={name} onChange={this.onPlayButton}/>
                <Link to="/playboard">
                <button className="play-button" type="button" onClick={this.onStartGame}>Play</button>
                </Link>
            </div>
        </div>)
    }
}

 export default UserPage