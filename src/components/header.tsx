import bjs from "../images/bjs_logo.png";
import search from '../images/search.jpg';
import { App, HeaderStyle, BjsLogoDiv, BjsLogoImg, BjsLoginLabel, BjsHomeLabel, BjsSearchLabel } from '../styles/headerStyle.js'

function Header() {
    return (
        <App>
            <HeaderStyle>
                <BjsLogoDiv> <BjsLogoImg src={bjs} alt="Bjs_logo" /> </BjsLogoDiv>
                <BjsLoginLabel>  Login/Signup for Member access </BjsLoginLabel>
                <BjsHomeLabel>  Home  </BjsHomeLabel>
                <BjsSearchLabel src={search} alt="Bjs_search" />
            </HeaderStyle>
            <body>Bj's Restaurant</body>

        </App>
    );
}

export default Header;
