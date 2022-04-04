import './index.sass';
import ThemeToggle from '../ThemeToggle';

const website = {
    homepage: "https://www.thamognya.com/",
    blog: "https://blog.thamognya.com/",
    git: "https://git.thamognya.com/",
    logo: "https://avatars.githubusercontent.com/u/98194153?v=4",
};
 
const Navbar = () => {
    return (
        <nav>
            <div className="navlogo">
                <a href="/">
                    <img src={website.logo} alt="logo" />
                </a>
            </div>
            <ul className="navlinks">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href={website.git}>Git</a>
                </li>
                <li>
                    <a href={website.blog}>Blog</a>
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
