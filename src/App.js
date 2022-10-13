import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tutorial from "./components/views/Tutorial/Tutorial";
import Docs from "./components/views/Docs/Docs";
import Blog from "./components/views/Blog/Blog";
import Community from "./components/views/Community/Community";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CDNLinks from './components/Test/CDNLinks'
import GettingStarted from "./components/Test/GettingStarted";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Docs}/>
        <Route exact path="/GettingStarted" component={GettingStarted}/>
        <Route exact path="/CDN-Links" component={CDNLinks}/>
        <Route exact path="/CDN-Links" component={CDNLinks}/>
        <Route exact path="/CDN-Links" component={CDNLinks}/>
        <Route exact path="/CDN-Links" component={CDNLinks}/>

        
        <Route exact path="/Tutorial" component={Tutorial}/>
        <Route exact path="/Blog" component={Blog}/>
        <Route exact path="/Community" component={Community}/>
      </Switch>
    </Router>
  );
}

export default App;
