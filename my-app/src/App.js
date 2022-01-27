import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import SearchBar from "./Components/Shared/SearchBar/SearchBar";
// import Profile from "./Components/Profile/Profile/";
import Profile from './Components/Profile/Profile';
import UserProvider from './Components/Context/UserProvider';
// import Card from "./Components/Shared/Candidates/Card/Card";
import './App.css';


function App() {
  return (
    <Router>
      <UserProvider> 
        <Header/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/profiles' element={<SearchBar/>} />
          <Route path='/profiles/:profileId' element={<Profile/>} /> 
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
