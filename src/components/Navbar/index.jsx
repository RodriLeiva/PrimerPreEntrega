import "./navbar.css"
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='container'>
        <p>Home</p>
        <p>Products</p>
        <p>Contact</p>
        <p>Our Clients</p>
        <p>About Us</p>
        <div>
        <BsFillCartFill />
        <p>4</p>
        </div>
    </nav>
  );
};

export default Navbar
