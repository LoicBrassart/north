import { NavLink } from 'react-router-dom';
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
          <NavLink exact to="/" className="flexer" activeClassName="active">
            <img src={Home} alt="Home" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/messages"
            className="flexer"
            activeClassName="active"
          >
            <img src={Message} alt="Messages" />
            <p>Messages</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/scenarii"
            className="flexer"
            activeClassName="active"
          >
            <img src={News} alt="Scenarii" />
            <p>Scenarii</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/parties"
            className="flexer"
            activeClassName="active"
          >
            <img src={Parties} alt="Parties" />
            <p>Parties</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/groups"
            className="flexer"
            activeClassName="active"
          >
            <img src={Groups} alt="Groups" />
            <p>Group</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/events"
            className="flexer"
            activeClassName="active"
          >
            <img src={Events} alt="Events" />
            <p>Event</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/library"
            className="flexer"
            activeClassName="active"
          >
            <img src={Library} alt="Library" />
            <p>Library</p>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            exact
            to="/settings"
            className="flexer"
            activeClassName="active"
          >
            <img src={Delete} alt="Settings" />
            <p>Settings</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/help" className="flexer" activeClassName="active">
            <img src={Ask} alt="Search" />
            <p>Help</p>
          </NavLink>
        </li>
      </ul>
    </SNav>
  );
}

export default Nav;
