import { Link } from 'react-router-dom';
function NavBar(){


    return (
        <nav>
          <ul>
              <Link to="/">Home </Link>
              
              <Link to="/adventurelist">Adventures </Link>

              <Link to="/about">About</Link>
          </ul>
        </nav>
      );

}

export default NavBar;