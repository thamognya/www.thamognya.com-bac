import './index.sass';

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
                <img src={website.logo} alt="logo"></img>
            </div>
            <ul className="navlinks">
                <li>
                    <a href={website.homepage} target="_blank" rel="noopener noreferrer">Home</a>
                </li>
                <li>
                    <a href={website.blog} target="_blank" rel="noopener noreferrer">Blog</a>
                </li>
                <li>
                    <a href={website.git} target="_blank" rel="noopener noreferrer">Git</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
