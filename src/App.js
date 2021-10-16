import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './Pages/NotFund/NotFound';
import Booking from './Pages/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/LoginForm/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/LoginForm/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
                <BrowserRouter>
                        <Header></Header>
                      <Switch>
                              <Route exact path="/">
                                    <Home></Home>
                              </Route>
                              <Route path="/home">
                                    <Home></Home>
                              </Route>
                              <Route path="/login">
                                    <Login></Login>
                              </Route>
                              <PrivateRoute path="/booking/:id">
                                    <Booking></Booking>
                              </PrivateRoute>
                              <Route path="*">
                                    <NotFound></NotFound>
                              </Route>
                      </Switch>
                  </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
