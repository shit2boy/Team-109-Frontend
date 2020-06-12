import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation  from "./components/NavBar";
import Slides  from "./components/Carousel";
import Cause  from "./components/Cause";
import About  from "./components/About";
import Youthproject  from "./components/Y-trainProject";
import {Userform}  from "./components/UserForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

 class App extends Component {
  render() {
    return (

      <React.Fragment>
          <Navigation/>
          
          <Router>
          <Switch>
            <Route exact path="/" component={Slides}/>
           <Route path="/cause" component={Cause} />
           <Route path="/about" component={About} />
           <Route path="/donor" component={Userform} />
            <Route path="/youthTraining" component={Youthproject} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
      
    )
  }
}

export default App;