import { Link } from "react-router-dom";
import Kasa from "../Header/kasa.png";

function Header() {
    return (
        <div class="bodyHeader">
            <img class="img__Header" src={Kasa} alt="logo kasa" />
            <nav class="link">
                <Link to="/">Accueil</Link>
                <Link class="link__noBorder" to="/apropos">
                    A Propos
                </Link>
            </nav>
        </div>
    );
}

export default Header;
