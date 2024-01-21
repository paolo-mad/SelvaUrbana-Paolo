import Bougainvillea from '../assets/photos/Bougainvillea.webp'
import indoor_icon from '../assets/icons/indoor_icon.svg'

const Card = () => {
    return (
    <div className="card">
        <h3 id="cardTitle">Bougainvillea</h3>
        <img src={Bougainvillea} alt="" />
        <img src= {indoor_icon} alt="indoor plant" id='indoor'/>
        <p id='price'>45.00 €</p>
        <p id='stock'>stock</p>
        <div id="buttonContainer">
            <button>info</button>
            <button>edit</button>
            <button>delete</button>          
        </div>
    </div>
    )
}

export default Card