import '../src/assets/css/bootstrap.css';
import './App.css';
import HomeView from './view/home'
import Signup from './view/login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
        <Route path='/login' component={Signup} />
        <Route path='/' component={HomeView} />
    </Switch>
</Router>
  );
}

export default App;
