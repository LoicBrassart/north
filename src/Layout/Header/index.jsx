import { Logo, Notif } from './icons';
import SHeader from './style';

function Header() {
  return (
    <SHeader>
      <div className="flexer">
        <div className="centerer">
          <img src={Logo} alt="North Games - Home" className="logo" />
        </div>
        <div className="centerer">
          <input type="search" />
        </div>
      </div>
      <div className="flexer">
        <div className="centerer">
          <img src={Notif} alt="Notifications" className="avatar" />
        </div>
        <div className="centerer soon">DERANRAN</div>
      </div>
    </SHeader>
  );
}

export default Header;
