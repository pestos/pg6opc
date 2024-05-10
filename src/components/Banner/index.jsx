
function Banner(props){
    return(
        <div class="conteneur" >

            <img class={props.className} src={props.bannerImage} alt="montagne"/>
            <h1 class="h1__banner">{props.texte}</h1>


        </div>
    )
}

export default Banner