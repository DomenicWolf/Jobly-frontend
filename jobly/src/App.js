import {Routes,BrowserRouter,Route} from 'react-router-dom'
import NavBar from './NavBar';
import './App.css';
import Home from './Home';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import Jobs from './Jobs';
import Login from './Login';
import SignUp from './SignUp';
import JoblyApi from './api';
import { useState } from 'react';
import Logout from './Logout';
import Profile from './Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [token,setToken] = useState( window.localStorage.getItem('token') !== 'null' ? window.localStorage.getItem('token') : null);
  console.log(token )
  const [currentUser,setCurrentUser] = useState(token ? JSON.parse(window.localStorage.getItem('user')) : null);
  // const [token,setToken] = useState();
  // const[currentUser,setCurrentUser] = useState()
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <NavBar token={token} currentUser={currentUser}></NavBar>
      <main>
        <Routes>
          <Route path='/' element={<Home currentUser={currentUser}></Home>}/>
          <Route path='/companies' element={<Companies></Companies>}/>
          <Route path='/companies/:handle' element={<CompanyDetails></CompanyDetails>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/login/' element={<Login setToken={setToken} setCurrentUser={setCurrentUser}/>}/>
          <Route path='/signup' element={<SignUp setCurrentUser={setCurrentUser} setToken={setToken}/>}/>
          <Route path='/logout' element={<Logout setToken={setToken} setCurrentUser={setCurrentUser}/>}/>
          <Route path='/profile' element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        </Routes>
      </main>  
      <ToastContainer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
