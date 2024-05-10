import { Link } from "react-router-dom"
import Kasa from "../../assets/kasa.png"



function Header(){
    return(
        <div class="bodyHeader">
        <img class="img__Header" src={Kasa} alt="logo kasa" />
        <nav class="link">
            <Link to ="/">Acceuil</Link>
            <Link class="link__noBorder" to ="/apropos">A Propos</Link>
        </nav>
        </div>
    )
}


export default Header