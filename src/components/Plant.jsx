const Plant = ({plants, handleDelete}) => {

    return (
        <div className='plant-list'>
            {plants.map((plant) => (
                <div className="card" key={plant.id}>
                    <h3 className='cardName'>{plant.name}</h3>
                    <p className="stock">stock {plant.stock}</p>
                    <p className="price">{plant.price} €</p>
                </div>
            ))}
        </div>
    );  
}
 
export default Plant;