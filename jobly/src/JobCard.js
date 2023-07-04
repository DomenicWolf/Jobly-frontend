import './JobCard.css'
import ApplyButton from './ApplyButton'

const JobCard = ({job}) => {

    return (
        <div className="job-card-main">
            <h1>{job.title}</h1>
            <div>Salary: {job.salary ? job.salary : 'unknown'}</div>
            <div>Equity: {job.equity ? job.equity : 'none'}{job.equity ? '%' : ''}</div>
            <ApplyButton className='job-card-button'  username={JSON.parse(window.localStorage.getItem('user')).username} id={job.id}>APPLY</ApplyButton>
        </div>
    )
}

export default JobCard