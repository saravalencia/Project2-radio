import Navbar from './components/Navbar/Navbar'
import './App.css';
import {Map} from './components/map/Map';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/Navbar/AboutUs';

function App()  {

  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <Navbar />
            <Map />
        </Route>
        <Route path="/about">
            <Navbar />
            <AboutUs title="The Radio APP" subtitle="The first Radio App that you can listen everywhere, it's here, it's possible!" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
            />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;