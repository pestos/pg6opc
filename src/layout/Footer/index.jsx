import "../Footer/Footer.scss";
import kasaFooter from "../Footer/kasaFooter.png";

function Footer() {
    return (
        <section class="blackDiv">
            <img src={kasaFooter} alt="logo kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </section>
    );
}

export default Footer;
