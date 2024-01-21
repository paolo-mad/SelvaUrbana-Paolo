import { useEffect, useState } from 'react';
import Plant from './Plant';

// import Bougainvillea from '../assets/photos/Bougainvillea.webp'
// import indoor_icon from '../assets/icons/indoor_icon.svg'



const PlantList = () => {

    const [plants, setPlants] = useState(null);

    useEffect(() => {
      fetch('http://localhost:3001/products')
      .then(res => {
        return res.json()
      })
      .then( data => { 
        setPlants(data)
      })
    },[])

    return (
    <div>
            {plants && <Plant plants = {plants}/>}
    </div>
    )
}

export default PlantList