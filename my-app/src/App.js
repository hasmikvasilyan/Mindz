import {Fragment} from "react";
import Home from './Components/Home/Home';
import SearchBar from "./Components/Shared/SearchBar/SearchBar";
// import Card from "./Components/Shared/Candidates/Card/Card";
import './App.css';


function App() {
  return (
    <Fragment> 
      <Home></Home>   
      <SearchBar></SearchBar>
      {/* <Card></Card> */}
    </Fragment>
  );
}

export default App;
