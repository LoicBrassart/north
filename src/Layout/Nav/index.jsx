import {
  Ask,
  Delete,
  Events,
  Groups,
  Home,
  Library,
  Message,
  News,
  Parties,
} from './icons';
import SNav from './style';

function Nav() {
  return (
    <SNav>
      <ul>
        <li>
          <img src={Home} alt="Home" />
          <span>Home</span>
        </li>
        <li>
          <img src={Message} alt="Messages" />
          <span>Messages</span>
        </li>
        <li>
          <img src={News} alt="News" />
          <span>News</span>
        </li>
        <li>
          <img src={Parties} alt="Parties" />
          <span>Parties</span>
        </li>
        <li>
          <img src={Groups} alt="Groups" />
          <span>Group</span>
        </li>
        <li>
          <img src={Events} alt="Events" />
          <span>Event</span>
        </li>
        <li>
          <img src={Library} alt="Library" />
          <span>Library</span>
        </li>
        <li>
          <img src={Home} alt="Home" />
          <span>Home</span>
        </li>
      </ul>
      <ul>
        <li>
          <img src={Delete} alt="Settings" />
          <span>Settings</span>
        </li>
        <li>
          <img src={Ask} alt="Search" />
          <span>Help</span>
        </li>
      </ul>
    </SNav>
  );
}

export default Nav;