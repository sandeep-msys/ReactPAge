import './App.css';
import Navbar from './components/Navbar/Navbar'
import Tutorial from './components/views/Tutorial/Tutorial';
import Docs from './components/views/Docs/Docs'
import Blog from './components/views/Blog/Blog';
import Community from './components/views/Community/Community';
import { BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component = {Docs}>
            {/* <Route path="/Tutorial" element={<Tutorial />} />
            <Route path="/Blog" element={<Blog/>}/> */}
          </Route>
          <Route exact path='/Tutorial' component = {Tutorial}/>
          <Route exact path='/Blog' component={Blog}/>
          <Route exact path='/Community' component={Community}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
