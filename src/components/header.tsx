import bjs from "../images/bjs_logo.png";
import '../styles/header.css';
import search from '../images/search.jpg';

function Header() {
  return (
    <div className="App">
      <header className="Bjs-header">
      <div className="bjs_div_logo"> <img src={bjs} className="Bjs-logo" alt="Bjs_logo" /> </div>
       <div>
        <label className="bjs_loign">  Login/Signup for Member access </label>
        <label className="bjs_home">  Home  </label>
        <img src={search} className="bjs_search" alt="Bjs_search" />
        </div>
      </header>
      <body>Bj's Restaurant</body>
     
    </div>
  );
}

export default Header;
