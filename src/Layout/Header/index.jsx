import SearchBar from 'Layout/SearchBar';
import Notif from './icons';
import SHeader from './style';

export default function Header() {
  return (
    <SHeader>
      <div className="flexer">
        <SearchBar />
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
