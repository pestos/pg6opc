import { Link, useLocation } from "react-router-dom";
import Kasa from "../Header/kasa.png";

function Header(item) {
    const location = useLocation();
    return (
        <div class="bodyHeader">
            <img class="img__Header" src={Kasa} alt="logo kasa" />
            <nav class="link">
                <Link
                    to="/"
                    className={
                        location.pathname === "/" ? "active" : "link__noBorder"
                    }
                >
                    Accueil
                </Link>
                <Link
                    to="/apropos"
                    className={
                        location.pathname.startsWith("/apropos")
                            ? "active"
                            : "link__noBorder"
                    }
                >
                    A Propos
                </Link>
            </nav>
        </div>
    );
}

export default Header;
