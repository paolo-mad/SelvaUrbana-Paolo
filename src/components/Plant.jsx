import { useHistory} from 'react'
const Plant = ({plants}) => {
    
    const history = useHistory
    const handleClick = ()=> {
        fetch('http://localhost:3001/products/1',{
            method: 'DELETE'
        })
        .then(() => {
            history.push('./')
        })
    }
    return (
        <div className='plant-list'>
            {plants.map((plant) => (
                <div className="card" key={plant.id}>
                    <h3 className='cardName'>{plant.name}</h3>
                    <p className="stock">stock {plant.stock}</p>
                    <p className="price">{plant.price} €</p>
                    <button className="deleteBtn" onClick={handleClick}>delete</button>
                </div>
            ))}
        </div>
    );  
}
 
export default Plant;