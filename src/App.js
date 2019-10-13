import React,{Component} from 'react';
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import './App.css';
import axios from 'axios'

class App extends Component{

    state = {
        users:[],
        loading:false
    }

    async componentDidMount(){
        this.setState({loading:true});
        const res = await  axios.get("https://api.github.com/users");
        // console.log(res.data);
        this.setState({
            users:res.data,
            loading:false
        });

    }

  render(){

      return (
          <div className="App">
              <Navbar />
              <div className="container">
                  <Users/>
              </div>
          </div>
      );
  }

}

export default App;
