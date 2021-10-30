import Picture from './icons';
import SLogo from './style';

export default function Logo() {
  return (
    <SLogo to="/">
      <div className="centerer">
        <img src={Picture} alt="North Games - Home" className="logo" />
      </div>
    </SLogo>
  );
}
