import { useState } from 'react';
import { mockUsers } from 'mockData';
import SearchBar from 'Layout/SearchBar';
import Notif from './icons';
import SHeader from './style';

export default function Header() {
  const [user] = useState(mockUsers[0]);
  return (
    <SHeader>
      <SearchBar />
      <div className="currentUser">
        <div className="centerer avatar">
          <img src={user.avatar} alt={user.pseudo} />
        </div>
        <img src={Notif} alt="Notifications" className="notifications" />
      </div>
    </SHeader>
  );
}
