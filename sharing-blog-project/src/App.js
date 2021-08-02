import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SmoothScroll from 'smooth-scroll'
import BlogDetail from './components/BlogDetail';
import Home from './pages/home/index'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
