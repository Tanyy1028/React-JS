import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"> Make My Trip </div>
      <nav>
        <ul>
          <li>Locations</li>
          <li>Flights</li>
          <li>Hotels</li>
          <li>Activities</li>
          <li>Support</li>
          <li><button className="sign-in">Sign in</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

