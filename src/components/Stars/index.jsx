import React from "react";
import "./stars.scss"; // Assurez-vous de créer ce fichier CSS pour les styles
import starActive from "../Stars/star-active.png";
import starDisable from "../Stars/stargray.png";

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <Star key={index} index={index} rating={rating} />
            ))}
        </div>
    );
};

const Star = ({ index, rating }) => {
    const getImage = () => {
        return rating >= index + 1 ? starActive : starDisable;
    };

    return <img src={getImage()} alt={`Star ${index + 1}`} className="star" />;
};

export default StarRating;
