import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Logo from "../assets/logo.png"


const Details = () => {
    const {id} = useParams();
    const {data: plants, error, isPending } = useFetch('http://localhost:3001/products/'+ id)
    return (
        <div className="plant-details">
            { isPending && <div>loading...</div>}
            { error && <div>{error}</div>}
            {plants && (
                <>
                    <div className="container">
                    <header>
                        <h1>Selva Urbana</h1>
                    <img src={Logo} alt="" id="logo"/>
                    </header>
                    <main>
                        <div className="productContainer">
                            <h2> {plants.name}</h2>
                            <img src={plants.photo} alt={plants.name} className='plantImg'/>
                            <p>{plants.description}</p>              
                        </div> 
                    </main>
                    <footer>
                        <p>selvaurbana@yahoo.com</p>
                        <p>545 543 826</p>
                        <p>©Selva Urbana</p>

                    </footer>
                    </div>            
                </>
            )}
            

        </div>
    );
}

export default Details
 