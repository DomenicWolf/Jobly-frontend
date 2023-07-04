import JoblyApi from "../api";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";


const useLogout = ({setCurrentUser,setToken}) => {
    const Navigate = useNavigate();
    const [localToken, storeToken] = useLocalStorage('token');
    const [localUser,storeUser] = useLocalStorage('user');
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = '';
    console.log(localToken,localUser)
    storeToken(null);
    storeUser(null);


    return Navigate('/');
}

export default useLogout;