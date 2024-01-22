import { Link } from 'react-router-dom'
const PlantaBtn = () => {

    const handleClick = () => {
       
    }
    return (
        <Link to={'/create'}>
        <button id="planta-btn" onClick={handleClick}>+ Planta</button>
        </Link>
    )
}

export default PlantaBtn