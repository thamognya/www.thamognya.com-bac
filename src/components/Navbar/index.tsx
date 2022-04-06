import './index.sass';
import ThemeToggle from '../ThemeToggle';
import { FaHome, FaGitAlt, FaBlog, FaContao } from 'react-icons/fa';
import logo from '../../assets/logo/logo.svg';

const website = {
    homepage: "https://www.thamognya.com/",
    blog: "https://blog.thamognya.com/",
    git: "https://git.thamognya.com/",
};

const size_of_icon = 30;
 
const Navbar = () => {
    return (
        <nav>
            <div className="navlogo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <ul className="navlinks">
                <li>
                    <a href="/" target="_blank" rel="noopener noreferrer"><FaHome size={size_of_icon} /></a>
                </li>
                <li>
                    <a href={website.git} target="_blank" rel="noopener noreferrer"><FaGitAlt size={size_of_icon} /></a>
                </li>
                <li>
                    <a href={website.blog} target="_blank" rel="noopener noreferrer"><FaBlog size={size_of_icon} /></a>
                </li>
                <li>
                    <a href="/contact" target="_blank" rel="noopener noreferrer"><FaContao size={size_of_icon} /></a>
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
