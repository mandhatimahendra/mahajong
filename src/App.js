import {BrowserRouter, Route,Switch} from "react-router-dom"
import UserPage from "./components/UserPage"
import PlayBoard  from "./components/PlayBoard";
import './App.css';
import SuccessScreen from "./components/SuccessScreen";

const App=()=>(
  <BrowserRouter>
  <Switch>
    <Route  exact path="/" component={UserPage}/>
    <Route  exact path="/playboard" component={PlayBoard}/>
    <Route  exact path="/gameover" component={SuccessScreen}/>
  </Switch>
  </BrowserRouter>
  
)

export default App;
