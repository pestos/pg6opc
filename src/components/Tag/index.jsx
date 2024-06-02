import React from "react";
import "./Tag.scss";

function Tag({ data = [] }) {
    return (
        <div className="conteneurTag">
            {Array.isArray(data) &&
                data.map((item, index) => <h2 key={index}>{item}</h2>)}
        </div>
    );
}

export default Tag;
