import navIcon from './Images/threelines.png';
import logo from  './Images/logo.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./Home Page/Home";
import './App.css';
import {hideNavBar, toggleMenu} from "./JavaScript/Scripts";
import {UnderDev} from "./UnderDev/UnderDev";
import {NotFound} from "./NotFound/NotFound";
import './CommonStyles/NavBar.css';
import Team from './Team/Team';

import './CommonStyles/MainStyles.css';
import './CommonStyles/ButtonStyles.css';

export default function App() {
  return (
      <>
        <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <Router>
          <div>
            <header>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="logo"><Link to="/" onClick={hideNavBar}>
                <img id="holo-icon" className="holo-logo" src={logo} alt={"holo icon"}/>
              </Link></a>
              <img id="nav-icon" src={navIcon} className="nav-icon" onClick={toggleMenu} alt={"nav icon"}/>
              <ul>
                <li><Link to="/" onClick={()=>{hideNavBar();}} >Home</Link></li>
                <li><Link to="/features" onClick={hideNavBar} >Features</Link></li>
                <li><Link to="/dashboard" onClick={hideNavBar} >Dashboard</Link></li>
                <li><Link to="/team" onClick={hideNavBar}>Team</Link></li>
                <li><Link to="/signin" onClick={hideNavBar} >Sign in</Link></li>
              </ul>
            </header>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/features" component={UnderDev}/>
              <Route path="/signup" component={UnderDev}/>
              <Route path="/team" component={Team}/>
              <Route path="/dashboard" component={UnderDev}/>
              <Route path="/team" component={UnderDev}/>
              <Route path="/signin" component={UnderDev}/>
              <Route exact path={"/"} component={Home} />
              <Route  path="*" component={NotFound}/>
              <Route  path="" component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </>
  );
}

