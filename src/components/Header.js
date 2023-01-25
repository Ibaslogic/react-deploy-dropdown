import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  console.log(process.env.PUBLIC_URL);

  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
