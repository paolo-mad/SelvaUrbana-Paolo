import PlantList from "../components/PlantList"
import PlantaBtn from "../components/PlantaBtn"
import Logo from "../assets/logo.png"


const Products = () => {
    return(
        <>
            <div className="container">
                <header className="header">
                    <h1>Selva Urbana</h1>
                   <img src={Logo} alt="" id="logo"/>
                </header>
                    <div className="addPlant">
                        <p className="anadeTxt">Añade tu planta a la colección única de plantas que es Selva Urbana</p>
                        <PlantaBtn/>        
                    </div>
                      
                <main>
                    <div className="productContainer">
                        <PlantList/>                
                    </div> 
                </main>
                <footer>
                    <p>selvaurbana@yahoo.com</p>
                    <p>Tel. 545543826</p>
                    <p>©Selva Urbana</p>

                </footer>
            </div>
        </>
    )
}

export default Products