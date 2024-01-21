const PlantList = ({cards}) => {

    return (
        <div className='plant-list'>
            {cards.map((card) => (
                <div className="card" key={card.id}>
                    <h3 className='cardName'>{card.name}</h3>
                    <p className="stock">stock {card.stock}</p>
                    <p className="price">{card.price} €</p>
                </div>
            ))}
        </div>
    );  
}
 
export default PlantList;