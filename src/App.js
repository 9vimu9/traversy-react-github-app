import React,{Component} from 'react';
import './App.css';

class App extends Component{

  render(){
      const name="john Doe";
      const loading =true;
      const showName=false;//&& use if no else condition
      return (
          <div className="App">
              {loading ? <h1>loading ..</h1> :<h1>hello {showName && name}</h1> }

          </div>
      );
  }

}

export default App;
