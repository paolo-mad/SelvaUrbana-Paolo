import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('indoor');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const plant = {name, price, stock, description, type} 

        setIsPending(true);
        
        fetch('http://localhost:3001/products',{  
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
            <div className="title_card">
                <img src="/public/photos/logo_selva_urbana.png" alt="logo Selva Urbana" /> 
                <p>Selva Urbana</p>
            </div>
            <form onSubmit={handleSubmit }>
                <label>Nombre de la Planta</label>
                <input type="text " 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Imagen
                    <input type="file" 
                        accept=".png, .webp"
                        required
                    /> 
                </label>   
                <label>Precio</label>
                <input type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Cantidad en stock</label>
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
                <label>Interior / Exterior</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="indoor">Interior</option>
                    <option value="outdoor">Exterior</option>
                </select>
                {!isPending && <button>Adicionar Planta</button>}
                {isPending && <button disabled >adicionar planta...</button>}
            </form>
        </div>
     );
}
 
export default Create; 