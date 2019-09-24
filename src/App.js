import React,{Component} from 'react';
import Navbar from "./components/layout/Navbar"
import './App.css';

class App extends Component{

  render(){

      return (
          <div className="App">
              <Navbar
                  title="Git Hub Finder"
                  icon="fa fa-github"
              />
              <h1>hello from react</h1>
          </div>
      );
  }

}

export default App;
