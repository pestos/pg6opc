import "./information.scss";

function Description(data) {
    return (
        <div className="containerForm">
            <div className="containerForm__Container">
                <div className="containerForm__TitleName">
                    <h1>{data.title}</h1>
                    <h2>{data.location}</h2>
                </div>
            </div>
        </div>
    );
}

export default Description;
