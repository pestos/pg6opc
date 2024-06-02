import "./Button.scss";

function FormTags(data) {
    return (
        <div className="conteneurForm">
            <div className="conteneurForm__Conteneur">
                <div className="conteneurForm__TitleName">
                    <h1>{data.title}</h1>
                    <h2>{data.location}</h2>
                </div>
            </div>
        </div>
    );
}

export default FormTags;
