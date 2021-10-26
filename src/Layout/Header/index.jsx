import { Logo, Notif } from './icons';

function Header() {
  return (
    <header>
      <div className="flexer">
        <div className="centerer">
          <img src={Logo} alt="North Games - Home" />
        </div>
        <div className="centerer">
          <input />
        </div>
      </div>
      <div className="flexer">
        <div className="centerer">
          <img src={Notif} alt="Notifications" />
        </div>
        <div className="centerer soon">DERANRAN</div>
      </div>
    </header>
  );
}

export default Header;
