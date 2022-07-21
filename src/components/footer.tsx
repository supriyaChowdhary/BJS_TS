
import facebook from "../images/facebook.jpg"
import twitter from "../images/Twitter.jpg"
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.jpg";
import ios from "../images/ios.png";
import playStore from "../images/play.png";
import { App, FooterStyle, BjsDiv1, BjsLeft, BjsRight, BjsLabel, IosLogo ,PlayLogo,BjsLabel1,BjsLabelLeft ,BjsLabelLeft1,BjsBottom ,FacebookLogo ,YoutubeLogo,InstagramLogo,TwitterLogo} from '../styles/footerStyle'

function Footer() {
  return (
    <App>
      <FooterStyle>
        <BjsDiv1>
          <BjsLeft>
            <BjsLabel>  SUPPORT  </BjsLabel>
            <BjsLabel>  CAREERS  </BjsLabel>
            <BjsLabel>  INVESTORS </BjsLabel>
            <BjsLabel>  ABOUT </BjsLabel>
          </BjsLeft>
          <BjsRight>
            <FacebookLogo src={facebook} alt="facebook_logo" />
            <InstagramLogo src={instagram} alt="instagram_logo" />
            <TwitterLogo src={twitter}  alt="twitter_logo" />
            <YoutubeLogo src={youtube}  alt="youtube_logo" />
          </BjsRight>
        </BjsDiv1>
        <BjsLabelLeft>
          <BjsLabelLeft1>
           <IosLogo src={ios} alt="ios_logo" />
            <PlayLogo src={playStore}  alt="play_logo" />
          </BjsLabelLeft1>
          <BjsBottom>
            <BjsLabel1>  @ 2022 bJ's Restaurant </BjsLabel1> 
            </BjsBottom>
        </BjsLabelLeft>
      </FooterStyle>
    </App>
  );
}

export default Footer;
