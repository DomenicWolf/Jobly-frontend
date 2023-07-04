import JoblyApi from "./api";
import './ApplyButton.css'
import useLocalStorage from "./hooks/useLocalStorage";

const ApplyButton = ({id,username}) => {
    const applications = JSON.parse(window.localStorage.getItem('user')).applications
    const [localUser,storeUser] = useLocalStorage('user');
    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            await JoblyApi.apply(username,id)
            storeUser(await JoblyApi.getUser(username))
        }catch(err){
            console.log(err)
        }
        
    }
    console.log(applications)
    if(!applications.includes(id)){
          return (
                <div className="apply-button-main">
                    <form onSubmit={handleSubmit}>
                        <button className="apply-button">APPLY</button>
                    </form>
                </div>
        ) 
    }else {
        return (
            <div className="apply-button-main">
                <button className="apply-button-disabled" disabled>APPLIED</button>
            </div>
        )
    }
 
}

export default ApplyButton;

//!applications.includes(id)