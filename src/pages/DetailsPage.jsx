import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    const {data: plants, error, isPending } = useFetch('http://localhost:3001/products/'+ id)
    return (
        <div className="plant-details">
            { isPending && <div>loading...</div>}
            { error && <div>{error}</div>}
            {plants && (
                <>
                    <div className="details_container">
                    <header>
                        <img src={Logo} alt="" id="logo"/>
                        <h1>Selva Urbana</h1>
                    <img src={Logo} alt="" id="logo"/>
                    </header>
                    <main>
                        <div className="details-container">
                            <h2> {plants.name}</h2>
                            <div className="image-container">
                            <img src={plants.photo} alt={plants.name} className='plantImgBig'/>
                            </div>
                            <p className="plantDescription">{plants.description}</p>
                            <Link to={'/'}>
                                <button className="backBtn">atrás</button>              
                            </Link>
                        </div> 
                    </main>
                    <footer className="details-footer">
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
