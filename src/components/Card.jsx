import { useState } from 'react';

// import Bougainvillea from '../assets/photos/Bougainvillea.webp'
// import indoor_icon from '../assets/icons/indoor_icon.svg'
import PlantList from './PlantList';



const Card = () => {

    const [cards, setCards] = useState(
        [
            {
              "id": 1,
              "name": "Epipremum aureum",
              "photo":"/src/img/epipremnum-aureum.jpg",
              "type": "Interior",
        
              "stock":"10",
              "price" : "12",
              "description": "Prefiere zonas bien iluminadas, pero sin sol directo. Esta bien adaptada a los ambientes templados de la casa, pero es sensible a los cambios bruscos de temperatura y a las zonas con corrientes de aire. El riego debe ser abundante de primavera a atoño, disminuyendo la frecuencia en invierno."
            },
            {
              "id": 2,
              "name": "Sansevieria",
              "photo":"/src/img/sansevieria.webp",
              "type": "Interior",
              "stock":"8",
              "price" : "9",
              "description": "Esta planta, ubicada en este espacio clave de la casa, se convertirá en un talismán de la buena suerte y además actuará como filtro energético ahuyentando las energías negativas que pueden ingresar desde afuera."
            }
        
        
          ]
    );


    return (
    <div>
            <PlantList cards={cards}/>
            {/* <PlantList cards={cards.filter((card  => card.name == "Sansevieria" ))}/> */}
    </div>
    )
}

export default Card