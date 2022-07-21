
import facebook from "../images/facebook.jpg"
import twitter from "../images/Twitter.jpg"
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.jpg";
import ios from "../images/ios.png";
import playStore from "../images/play.png";
import '../styles/footer.css';

function Footer() {
  return (
    <div className="App">
      <footer className="Bjs-footer">
        <div className="bjs_div1">
          <div className="bjs_left">
            <label className="bjs_label">  SUPPORT  </label>
            <label className="bjs_label">  CAREERS  </label>
            <label className="bjs_label">  INVESTORS </label>
            <label className="bjs_label">  ABOUT </label>
          </div>
          <div className="bjs_right">
            <img src={facebook} className="facebook-logo" alt="facebook_logo" />
            <img src={instagram} className="instagram-logo" alt="instagram_logo" />
            <img src={twitter} className="twitter-logo" alt="twitter_logo" />
            <img src={youtube} className="youtube-logo" alt="youtube_logo" />
          </div>
        </div>
        <div className="bjs_label_left">
          <div className="bjs_label_left1">
            {/* <label className="bjs_label1">  ios CTA </label>
            <label className="bjs_label1">  Android CTA </label>  */}
            <img src={ios} className="ios-logo" alt="ios_logo" />
            <img src={playStore} className="play-logo" alt="play_logo" />

          </div>
          <div className="bjs_bottom"><label className="bjs_label1">  @ 2022 bJ's Restaurant </label> </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
