import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const Details = () => {
    const url = 'https://selva-api.vercel.app/products/'
    const {id} = useParams();
    const {data: plants, error, isPending } = useFetch(url + id)
    return (
        <div>
            { isPending && <div>loading...</div>}
            { error && <div>{error}</div>}
            {plants && (
                <>
                    <div className="container">
                        <header className="header">
                            <img src={Logo} alt="" id="logo"/>
                            <h1>Selva Urbana</h1>
                        <img src={Logo} alt="" id="logo"/>
                        </header>
                        <main>
                                <h2 className="detailH2"> {plants.name}</h2>
                            <div className="plantDetails">
                                <div className="image-container">
                                <img src={plants.photo} alt={plants.name} className='plantImgBig'/>
                                </div>
                                <p className="plantDescription">{plants.description}</p>
                            </div> 
                                <Link to={'/'}>
                                    <button className="backBtn">atrás</button>              
                                </Link>
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
