import nws from '../assets/nws.png';
import logo from '../logo.svg';
import '../App.css';

function Header() {
  return (
    <>
      <div className='logo-header'>
        <img className='img-nws' alt="nws" src={nws} />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  )
}

export default Header;