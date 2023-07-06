import { useState,useEffect } from "react";
import './Profile.css'
import JoblyApi from "./api";
import useLocalStorage from "./hooks/useLocalStorage";
import {toast} from 'react-toastify'

const Profile = ({currentUser,setCurrentUser}) => {

    const success = () => {
        toast.success('Successfully saved!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const [localUser,storeUser] = useLocalStorage('user')
    const INITIALSTATE = {
        username: '',
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
        const {username,first,last,email} = formData;
        let updatedUser = await JoblyApi.updateUser(currentUser.username,{firstName:first,lastName:last,email})
        let user = await JoblyApi.getUser(currentUser.username);
        setCurrentUser(user)
        storeUser(user)
        setFormData(INITIALSTATE)
        success()
    }
    return (
        <div className="profile-main">
            <h1>PROFILE</h1>
        <form className="profile-form"onSubmit={handleSubmit}>
            <div className="profile-containers">
                <label  htmlFor="username">Username</label>
                <input disabled type="text" onChange={handleChange} value={formData.username} placeholder={currentUser.username} name="username"/>
            </div>
            <div className="profile-containers">
                <label htmlFor="first">First Name</label>
                <input type="text" onChange={handleChange} value={formData.first} placeholder={currentUser.firstName} name="first"/>
            </div>
            <div className="profile-containers">
                <label htmlFor="last">Last Name</label>
                <input type="text" onChange={handleChange} value={formData.last} placeholder={currentUser.lastName} name="last"/>
            </div> 
            <div className="profile-containers">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleChange} value={formData.email} placeholder={currentUser.email} name="email"/>
            </div>
            <button>Save Changes</button>
        </form>
            <div className="profile-img-container">

            
                <img className='profile-img-1'src='https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?size=626&ext=jpg'></img>
                <img className="profile-img-2" src='https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?size=626&ext=jpg'></img>
            </div>    
        </div>
    )
}   

export default Profile;