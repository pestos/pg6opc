import "../Button/Button.scss";
import Collapse from "../Collapse";
import Slideshow from "../Slideshow/index.jsx";
import StarRating from "../Star/index.jsx";

function Button(props) {
    return (
        <div className="conteneurForm">
            <Slideshow slide={props.images} />
            <div className="conteneurForm__Conteneur">
                <div className="conteneurForm__TitleName">
                    <h1>{props.title}</h1>
                    <h2>{props.location}</h2>
                </div>
                <div className="conteneurForm__NamePicture">
                    <h2>{props.host}</h2>
                    <img src={props.picture} alt=""></img>
                </div>
            </div>
            <div className="conteneurTagStar">
                <div className="conteneurTagStar__Tag">
                    <h2 class="buttonRed">{props.tags}</h2>
                    <h2 class="buttonRed">{props.tags2}</h2>
                    <h2 class="buttonRed">{props.tags3}</h2>
                </div>
                <div>
                    <StarRating rating={props.rating} />
                </div>
            </div>
            <div className="conteneurCollapse">
                <Collapse title={props.title} children={props.description} />
                <Collapse title={props.title} children={props.equipments} />
            </div>
        </div>
    );
}

export default Button;
