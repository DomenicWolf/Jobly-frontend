import { Link } from "react-router-dom"
import './Home.css'
const Home = ({currentUser}) => {

    console.log(currentUser)
    return (
        <div className="home-main">
            <h1>Jobly</h1>
            <p>Welcome to Jobly <br></br> The most convenient place to take control of your future!</p>
            <div className="home-main-links">
                {currentUser ? 
                <div>
                    <h2>Welcome Back, {currentUser.firstName}!</h2>
                </div>
                :
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign-up</Link> 
                </div>
                }
                <img className='home-img-1'src='https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?size=626&ext=jpg'></img>
                <img className="home-img-2" src='https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?size=626&ext=jpg'></img>
            </div>
            
        </div>
    )
}

export default Home;