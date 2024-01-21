import Card from "../components/Card"
import PlantaBtn from "../components/PlantaBtn"
import Logo from "../assets/logo.png"


const Products = () => {
    return(
        <>
            <div className="container">
                <header>
                    <h1>Selva Urbana</h1>
                   <img src={Logo} alt="" id="logo"/>
                    <PlantaBtn/>
                </header>
                <main>
                    <div className="productContainer">
                            <Card/>                
                    </div>
                  
                </main>
                <footer>
                    <p>selvaurbana@yahoo.com</p>
                    <p>545 543 826</p>
                    <p>©Selva Urbana</p>

                </footer>
            </div>
        </>
    )
}

export default Products