import JoblyApi from "./api";
import { useState,useEffect } from "react";
import JobCard from "./JobCard";
import SearchFilter from "./SearchFilter";
import './Jobs.css'

const Jobs = () => {

    const [jobs,setJobs] = useState([]);
    useEffect(() => {
        async function fetchData() {
           setJobs([...await JoblyApi.getJobs()]) 
        }
        fetchData()
    },[])


    return (
        <div>
            <div>
                <img className='jobs-img-1'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdDwWlvUybSmsz6xrqMWxLF_HEjC_3TctLw&usqp=CAU'></img>
            </div>
            
            <SearchFilter type='Jobs' setFunction={setJobs}></SearchFilter>
            {jobs.map(j => <JobCard key={j.id}  job={j}/>)}
            
        </div>
    )
}

export default Jobs