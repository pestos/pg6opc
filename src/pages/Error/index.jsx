import Error from "../../assets/404.png";
import { Link } from "react-router-dom";
import "../Error/Error.scss";

function Error404() {
    return (
        <div className="conteneur404">
            <img alt="conteneur404" src={Error}></img>
            <p className="title">
                Oups! La page que vous demander n'existe pas.
            </p>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
    );
}

export default Error404;
