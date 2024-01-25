import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('indoor');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    //"photo":"/photos/Costilla.webp",
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
                    onChange={handleImageChange} />
                    {photo && <img src={photo} alt="Planta Seleccionada" />}

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
                    <option value="indoor">interior</option>
                    <option value="outdoor">exterior</option>
                </select>
                {!isPending && <button>add plant</button>}
                {isPending && <button disabled >adding plant...</button>}
            </form>
        </div>
     );
}
 
export default Create; 