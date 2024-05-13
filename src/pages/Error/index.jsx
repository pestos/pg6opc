import Error from "../../assets/404.png";
import { Link } from "react-router-dom";
import "../Error/Error.css";

function Error404() {
    return (
        <div>
            <img alt="conteneur404" src={Error}></img>
            <p>Oups! La page que vous demander n'existe pas.</p>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
    );
}

export default Error404;
