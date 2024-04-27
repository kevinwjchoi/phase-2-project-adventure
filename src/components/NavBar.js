import { Link } from 'react-router-dom';
function NavBar(){


    return (
        <nav className='nav-bar'>
          <ul>
              <Link to="/">Home </Link>
          </ul>
          <ul>
            <Link to="/adventurelist">Adventures </Link>
          </ul>
          <ul>
            <Link to="/about">About</Link>
          </ul>
        </nav>
      );

}

export default NavBar;