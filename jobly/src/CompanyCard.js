import './CompanyCard.css'
import { Link } from 'react-router-dom'

const CompanyCard = ({data}) => {
    console.log(data)
    return (
        <Link className='card-link' to={`${data.handle}`}>
            <div className="company-card-main">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                {/* //{data.logoUrl ? <img src={data.logoUrl}></img> : ''} */}
            </div>
        </Link>
    )   
}

export default CompanyCard;