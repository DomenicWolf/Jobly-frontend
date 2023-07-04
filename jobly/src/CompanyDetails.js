import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import { useEffect,useState } from "react";
import JobCard from "./JobCard";
import './CompanyDetails.css'

const CompanyDetails =  () => {
    const {handle} = useParams();
    const [company,setCompany] = useState()
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const res = await JoblyApi.getCompany(handle)
                
                setCompany([res])
            }catch(e){
                console.error(e)
            }
        }
        fetchCompany()
    },[])
    
   console.log(company)
    return (
        <div>
            {company ? <div><div className="company-details-info"><h1>{company[0].name}</h1> <p>{company[0].description}</p></div>{company[0].jobs.map(j => <JobCard job={j}/>)}</div> : <h1>Loading..</h1>}
            
            
        </div>
    )
}

export default CompanyDetails;