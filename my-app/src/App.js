import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ForgotPassword/ResetPassword';
import SearchBar from "./Components/Shared/SearchBar/SearchBar";
import Profile from './Components/Profile/Profile';
import UserProvider from './Components/Context/UserProvider';
import './App.css';

function App() {
  return (
    <Router>
      <UserProvider> 
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/login/forgot_password" element={<ForgotPassword/>} />
          <Route path="reset_password" element={<ResetPassword />} />
          <Route path='/profiles' element={<SearchBar/>} />
          <Route path='/profiles/:profileId' element={<Profile/>} /> 
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
