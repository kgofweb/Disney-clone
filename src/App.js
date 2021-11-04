import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Header from './components/header/Header';
import Home from './components/home/Home';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;