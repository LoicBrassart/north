import { Link } from 'react-router-dom';
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
          <Link to="/" className="flexer">
            <img src={Home} alt="Home" />
            <p className="centerer">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Message} alt="Messages" />
            <p className="centerer">Messages</p>
          </Link>
        </li>
        <li>
          <Link to="/scenarii" className="flexer">
            <img src={News} alt="Scenarii" />
            <p className="centerer">Scenarii</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Parties} alt="Parties" />
            <p className="centerer">Parties</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Groups} alt="Groups" />
            <p className="centerer">Group</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Events} alt="Events" />
            <p className="centerer">Event</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Library} alt="Library" />
            <p className="centerer">Library</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Home} alt="Home" />
            <p className="centerer">Home</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/" className="flexer">
            <img src={Delete} alt="Settings" />
            <p className="centerer">Settings</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flexer">
            <img src={Ask} alt="Search" />
            <p className="centerer">Help</p>
          </Link>
        </li>
      </ul>
    </SNav>
  );
}

export default Nav;
