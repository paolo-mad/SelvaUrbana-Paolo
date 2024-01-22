import { useHistory} from 'react'
import { Link } from 'react-router-dom'

const Plant = ({plants}) => {
    
    const history = useHistory
    const handleClick = ()=> {
        fetch('http://localhost:3001/products/'+ 1,{
            method: 'DELETE'
        })
        /* .then(() => {
            history('./')
        }) */
    }
    return (
        <div className='plant-list'>
            {plants.map((plant) => (
                <div className="card" key={plant.id}>
                    <Link to={plant.id}>                   
                    <img src={plant.photo} alt="" className='plantImg'/>
                    <h3 className='cardName'>{plant.name}</h3>
                    <button className='deleteBtn'>click</button>
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