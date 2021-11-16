import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Details from './components/details/Details';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
          <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;