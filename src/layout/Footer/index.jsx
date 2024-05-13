import "../Footer/Footer.css";
import kasaFooter from "../Footer/kasaFooter.png";

function Footer() {
    return (
        <div class="blackDiv">
            <img src={kasaFooter} alt="logo kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
