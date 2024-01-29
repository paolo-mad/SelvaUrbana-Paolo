import { Link } from 'react-router-dom'
const PlantaBtn = () => {

    const handleClick = () => {
       
    }
    return (
        <Link to={'/create'} className='x'>
            <button id="planta-btn" onClick={handleClick}>+ Planta</button>
        </Link>
    )
}

export default PlantaBtn