import './index.sass';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    return (
        <nav>
            <div className="navlogo">
                <a href="/">
                    <img src="https://avatars.githubusercontent.com/u/98194153?v=4" alt="logo" />
                </a>
            </div>
            <ul className="navlinks">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="https://git.thamognya.com">Git</a>
                </li>
                <li>
                    <a href="https://blog.thamognya.com">Blog</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
