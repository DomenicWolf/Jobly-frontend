import JoblyApi from "./api";
import { useState,useEffect } from "react";
import JobCard from "./JobCard";
import SearchFilter from "./SearchFilter";

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
            <SearchFilter type='Jobs' setFunction={setJobs}></SearchFilter>
            {jobs.map(j => <JobCard key={j.id}  job={j}/>)}
        </div>
    )
}

export default Jobs