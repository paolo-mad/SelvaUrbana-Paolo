import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

const Plant = ({plants}) => {
    
    const navigate = useNavigate();

    const {id} = useParams();
    const handleClick = ()=> {
        fetch('http://localhost:3001/products/'+ id,{
            method: 'DELETE'
        })
        .then(() => {
            navigate('./')
        })
    }
    return (
        <div className='plant-list'>
            {plants.map((plant) => (
                <div className="card" key={plant.id}>
                    <h3 className='cardName'>{plant.name}</h3>
                    <Link to={plant.id}>                   
                    <img src={plant.photo} alt="" className='plantImg'/> 
                    <button className='deleteBtn'>view</button>
                    </Link>

                    <img src={plant.type} alt="" className='interiorPlant'/>
                    <p className="stock">{plant.stock} <br />stock</p>
                    <p className="price">{plant.price} €</p>

                    {/* <button className="deleteBtn" onClick={handleClick}>delete</button> */}
                    
                </div>
            ))}
        </div>
    );  
}
 
export default Plant;