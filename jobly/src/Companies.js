import { useState,useEffect } from "react";
import './Companies.css'
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchFilter from "./SearchFilter";

const Companies = () => {
    const [companies,setCompanies] = useState([]);
    useEffect(() => {
        async function fetchData() {
           setCompanies([...await JoblyApi.getCompanies()]) 
        }
        fetchData()
    },[])
    console.log(companies)
    //console.log(JoblyApi.getCompanies())
    

    return (
        
        <div>
            {companies ? 
            <div>
             <div className="companies-img-div">
            <img className="companies-img-2" src="https://media.istockphoto.com/id/1382109910/vector/stand-up-and-remote-meeting-vector-illustration.jpg?s=612x612&w=0&k=20&c=rMxEiJybCxQAtbW-DVuXlWLnsREfBbdNIbx3bBPuRII="></img>
            {/* <img className="companies-img-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8_7thswg_CYFep4foUgIKt6AzEhkOWiUlA&usqp=CAU"></img> */}
            
            </div>
            <SearchFilter type='Companies' setFunction={setCompanies}></SearchFilter>
            {companies.map(company => <CompanyCard data={company}/>)}
            </div>
           : <h1>Loading</h1>}
        </div>

    )
}

export default Companies;