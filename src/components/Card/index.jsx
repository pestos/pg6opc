import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css";

function Card({ item }) {
    return (
        <Link to={`/logement/${item.id}`}>
            <div key={item.id} data-id={item.id} className="cardRed">
                <img src={item.cover} alt={item.title + item.location} />
                <h2 className="title">{item.title}</h2>
            </div>
        </Link>
    );
}

export default Card;
