import { useState } from "react"
import JoblyApi from "./api"
import './SearchFilter.css'

const SearchFilter = ({type,setFunction}) => {
    const INITIALSTATE = {
        search: ''
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
        const {search} = formData;
        
        if(!search){
            return null
        }
        setFormData(INITIALSTATE)
        const res = type === 'Companies' ? await JoblyApi.filteredCompanies(search) : await JoblyApi.filteredJobs(search)
        setFunction([...res])
    }
    return (
        <div className="search-filter-main">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Enter search term..." value={formData.search} name='search' onChange={handleChange}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchFilter