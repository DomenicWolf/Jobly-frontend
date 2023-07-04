import { useState } from "react"
import JoblyApi from "./api"
import { useNavigate } from "react-router-dom"
import { Nav } from "reactstrap"
import useLocalStorage from "./hooks/useLocalStorage"
import './Login.css'

const Login = ({setToken,setCurrentUser}) => {
    const Navigate = useNavigate()
    const [tok,storeStorage] = useLocalStorage('token')
    const [usr,storeUser] = useLocalStorage('user')
    const INITIALSTATE = {
        username: '',
        password: ''
    }
    const [formData,setFormData] = useState(INITIALSTATE)
    const handleChange = e => {
        const {name,value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = async  e => {
        e.preventDefault();
        const {username,password} = formData;
        setFormData(INITIALSTATE)
        try {
            const res = await JoblyApi.login({username,password})
            const user = await JoblyApi.getUser(username);
            setCurrentUser({username:user.username,firstName:user.firstName,lastName:user.lastName,email:user.email});
            setToken(JoblyApi.token);
            storeStorage(JoblyApi.token)
            storeUser(user)
        }catch(e){
            alert('Incorrect username/password')
            console.error(e)
        }

        return Navigate('/')
    }

    return (
        <div className="login-main">
            <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <div  className="login-containers">
                <label htmlFor="username">Username</label>
                <input type='text' value={formData.username} name="username" placeholder="username" onChange={handleChange} />
            </div>
            <div className="login-containers">
                <label htmlFor="password">Password</label>
                <input type="password" value={formData.password} name="password" placeholder="password" onChange={handleChange} />
            </div>
            <button>Login</button>
        </form>
        </div>
    )
}

export default Login;