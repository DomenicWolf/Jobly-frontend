import { NavLink } from "react-router-dom"
import './NavBar.css'
import { Navbar, Nav, NavItem } from "reactstrap";
import JoblyApi from "./api";
import useLogout from "./hooks/useLogout";

const NavBar = ({token,currentUser}) => {
    console.log(token === 'null' ? 'yes': 'no')
    return (
        <div className="navbar-main">
            <Navbar expand='md'>
                <NavLink exact to='/' className='navbar-brand'>
                    Jobly
                </NavLink>
                    {token ? 
                    <Nav>
                        <NavLink to={'/'}>Home</NavLink> 
                        <NavLink to='/companies'>Companies</NavLink> 
                        <NavLink to={'/jobs'}>Jobs</NavLink>
                        <NavLink to={'/profile'}>Profile</NavLink>
                        <NavLink to={'logout'}>Logout {currentUser.username}</NavLink>
                        {/* <button >Logout {currentUser.username}</button> */}
                    </Nav>
                   : 
                    <Nav>
                        <NavLink to={'/signup'}>Sign-up</NavLink>
                        <NavLink to={'/login'}>Login </NavLink>
                    </Nav>
                    }
                
            </Navbar>
        </div>
    )
}

export default NavBar;