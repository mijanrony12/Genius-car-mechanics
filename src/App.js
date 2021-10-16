import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './Pages/NotFund/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
                   <Route exact path="/">
                         <Home></Home>
                   </Route>
                   <Route path="/home">
                         <Home></Home>
                   </Route>
                   <Route path="*">
                         <NotFound></NotFound>
                   </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
