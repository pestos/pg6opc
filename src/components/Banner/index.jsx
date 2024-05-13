import "../Banner/BannerImage.css";

function Banner(props) {
    return (
        <div class="conteneurBis">
            <img
                class={props.className}
                src={props.bannerImage}
                alt="montagne"
            />
            <h1 class="h1__banner">{props.texte}</h1>
        </div>
    );
}

export default Banner;
