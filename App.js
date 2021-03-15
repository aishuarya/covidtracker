import logo from './logo.svg';
import './App.css';
import react,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import Statedata from './Components/Statedata';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch 
  } from 'react-router-dom';


class App extends Component {

  constructor(){
    super(); 
  }
render(){
return (<div className ="container-fluid">
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
        <India/>
      </Route>
      <Route exact path="/India">
        <India/>
      </Route>
      <Route exact path="/World">
        <World/>
      </Route>
    </Switch>
  </Router>


</div>)

}}

export default App;
