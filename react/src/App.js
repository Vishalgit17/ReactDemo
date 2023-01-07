import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Signup from './component/Signup';
import Displaydata from './component/Displaydata';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route path="/Student" component={Signup}></Route>
      <Route path="/User" component={Displaydata}></Route> 
      </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
