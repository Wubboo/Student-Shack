import "./main.css"
import BurgerIcon from "../burger";


function Banner() {
    return(
        <div className="container">
            <div className="banner-bar">
                <div className="burgur-button-container">
                        <button className="burger-button">
                            <BurgerIcon />
                        </button >
                </div>
            </div>
        </div>
    )
}

export default Banner