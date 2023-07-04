import { useState } from "react";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import './SignUp.css'

const SignUp = ({setToken,setCurrentUser}) => {
    const [tok,storeStorage] = useLocalStorage('token')
    const [usr,storeUser] = useLocalStorage('user')
    const  Navigate = useNavigate()
    const INITIALSTATE = {
        username: '',
        password: '',
        first: '',
        last: '',
        email: ''
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
        const {username,password,first,last,email} = formData;
        setFormData(INITIALSTATE)
        try{
            await JoblyApi.register({username,password,firstName:first,lastName:last,email})
            setToken([JoblyApi.token])
            setCurrentUser({username,firstName:first,lastName:last,email})
            storeStorage(JoblyApi.token)
            storeUser(await JoblyApi.getUser(username))
        }catch(e){
            console.error(e)
            alert('something went wrong')
        }
        
        return Navigate('/')
    }

    return (
        <div className="sign-Up-main">
            <h1>Sign up</h1>
        <form className="sign-Up-form" onSubmit={handleSubmit}>
            <div className="sign-Up-containers">
                <label htmlFor="username">Username</label>
                <input type="text" onChange={handleChange} value={formData.username} placeholder="username" name="username"/>
            </div>
            <div className="sign-Up-containers">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} value={formData.password} placeholder="password" name="password"/>
            </div>
            <div className="sign-Up-containers">
                <label htmlFor="first">First Name</label>
                <input type="text" onChange={handleChange} value={formData.first} placeholder="first name" name="first"/>
            </div>
            <div className="sign-Up-containers">
                <label htmlFor="last">Last Name</label>
                <input type="text" onChange={handleChange} value={formData.last} placeholder="last name" name="last"/>
            </div>
            <div className="sign-Up-containers">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleChange} value={formData.email} placeholder="email" name="email"/>
            </div>
            <button>Register</button>
        </form>
        </div>
    )
}


export default SignUp;