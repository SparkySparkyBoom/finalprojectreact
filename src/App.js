import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import {Home,Daftarmakan,Contact} from './views'
import {Navbar,Nav} from 'react-bootstrap'
import Footer from './component/Footer'
class App extends React.Component {
  state={
    loading:true,
    suhu:null
  };
  //context API
  async componentDidMount(){
    const url="https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=e72ca729af228beabd5d20e3b7749713&units=metric";
    const response= await fetch(url);
    const data= await response.json();
    this.setState({suhu:data.main.temp,loading:false});
  }
  render(){
  return (
    <Router>
    <div className="App">
      
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">OrangArap</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Daftarmakan">Mulai Pesan Makanan!!</Nav.Link>
      <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
    </Nav>    
  </Navbar>
      
      <Switch>
        <Route exact path='/' >
          <Home suhu={this.state.suhu}/>
        </Route>
        <Route path='/Daftarmakan'>
          <Daftarmakan/>
        </Route>
        <Route path='/Contact'>
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}}

export default App;
