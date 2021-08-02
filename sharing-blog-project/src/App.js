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
  Route
} from "react-router-dom";
import IndexContact from './pages/contact';
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

function App() {
  return (
    <Router>
      <div className="App"> 
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog/:id">
            <BlogDetail/>
          </Route>
          <Route path="/contact">
            <IndexContact />
          </Route>
        </Switch>
        <Footer/>  
      </div>
  </Router>
  );
}

export default App;
