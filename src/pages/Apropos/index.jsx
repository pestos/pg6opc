
import Banner from "../../components/Banner/index.jsx";
import Image from "../../assets/montagneLac.jpeg"
import Collapse from "../../components/Collapse/index.jsx";
import "./Apropos.scss";

function Apropos() {
    const cssFiles = "banner-image banner-image__2";

    return (
        <div className="contentDiv">
            <Banner bannerImage={Image} className={cssFiles} />
            <Collapse
                title="Fiabilité"
                children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont régulierement vérifiées par nos équipes"
            />
            <Collapse
                title="Respect"
                children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme"
            />
            <Collapse
                title="Services"
                children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tous comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme"
            />
            <Collapse
                title="Sécurité"
                children="La sécurité est la priorité de Kasa. Aussi bien pour nos Hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire,cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécutié domestique pours nos hôtes"
            />
        </div>
    );
}

export default Apropos;
