import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

const Create = () => {
    const url = 'https://selva-api.vercel.app/products/'
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState("/icons/indoor_icon.svg");
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (reader.readyState === FileReader.DONE) {
                setPhoto(reader.result);
            }
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const plant = {name, photo, price, stock, description, type} 

        setIsPending(true);
        
        fetch(url,{  
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(plant)
        })
        .then (() => {
            console.log('new plant added ');
            setIsPending(false);
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Añadir nueva planta</h2>
            <form onSubmit={handleSubmit }>
                <label>Nombre</label>
                <input type="text " 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Imagen</label>
                <input type="file"
                    required
                    onChange={handleImageChange}
                    />
                <label>Precio</label>
                <input type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Stock</label>
                <input type="text " 
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <label>Descripción</label>
                <textarea 
                    required
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                >              
                </textarea> 
                <label>interior/exterior</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="/icons/indoor_icon.svg">interior</option>
                    <option value="/icons/outdoor_icon.svg">exterior</option>
                </select>
                {!isPending && <button>Añadir Planta</button>}
                {isPending && <button disabled >Añadir planta...</button>}
                {/* {!isPending && <button>add plant</button>} */}
                {/* {isPending && <button disabled >adding plant...</button>} */}

                <Link to="/">
                <button>Atrás</button>
                </Link>
            </form>
        </div>
     );
}
 
export default Create; 