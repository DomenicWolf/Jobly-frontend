import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";


// const Logout = ({setCurrentUser,setToken}) => {
//     const Navigate = useNavigate();
//     const [localToken, storeToken] = useLocalStorage('token');
//     const [localUser,storeUser] = useLocalStorage('user');
//     setCurrentUser(null);
//     setToken(null);
//     JoblyApi.token = '';
//     console.log(localToken,localUser)
//     storeToken(null);
//     storeUser(null);


//     return Navigate('/');
// }
const Logout = ({ setCurrentUser, setToken }) => {
    const navigate = useNavigate();
    const [localToken, storeToken] = useLocalStorage("token");
    const [localUser, storeUser] = useLocalStorage("user");
  
    useEffect(() => {
      setCurrentUser(null);
      setToken(null);
      storeToken(null);
      storeUser(null);
      navigate("/");
    }, [setCurrentUser, setToken, storeToken, storeUser, navigate]);
  
    console.log(localToken, localUser);
  
    return null;
  };

export default Logout;