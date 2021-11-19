import { useSelector } from 'react-redux';
import SearchBar from 'Layout/SearchBar';
import Notif from './icons';
import SHeader from './style';

export default function Header() {
  const { avatar, pseudo } = useSelector((state) => state.user);
  return (
    <SHeader>
      <SearchBar />
      <div className="currentUser">
        <div className="centerer avatar">
          <img src={avatar} alt={pseudo} />
        </div>
        <img src={Notif} alt="Notifications" className="notifications" />
      </div>
    </SHeader>
  );
}
