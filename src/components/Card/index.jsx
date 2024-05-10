import "../../styles/Card.css"



function Carre() {
    return (
        <div class="cardRed">
            <h2>Titre de la location</h2>
        </div>
    );
}


function Card(){
    const carres = Array(6).fill().map((_, index) => <Carre key={index} 
     />);
    
    return(
        
        <div class="conteneur conteneur__card">
           {carres}
        </div>
    )
}


export default Card




