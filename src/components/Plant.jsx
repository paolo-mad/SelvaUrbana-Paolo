import { useHistory} from 'react'

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
                    <img src={plant.photo} alt="" className='plantImg'/>
                    <img src={plant.type} alt="" className='interiorPlant'/>
                    <h3 className='cardName'>{plant.name}</h3>
                    <p className="stock">{plant.stock} <br />stock</p>
                    <p className="price">{plant.price} €</p>

                    <button className="deleteBtn" onClick={handleClick}>delete</button>
                </div>
            ))}
        </div>
    );  
}
 
export default Plant;