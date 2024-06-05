import "../Host/Host.scss";

function Host(data) {
    return (
        <div className="containerForm__NamePicture">
            <h2>{data.host}</h2>
            <img src={data.picture} alt="jesuisla"></img>
        </div>
    );
}

export default Host;
