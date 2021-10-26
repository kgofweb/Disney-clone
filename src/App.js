import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;