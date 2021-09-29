import '../src/assets/css/bootstrap.css';
import './App.css';
import HomeView from './view/home'
import Login from './view/login'
import Signup from './view/signUp'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/' component={HomeView} />
      </Switch>
    </Router>
  );
}

export default App;
