import './index.scss';

const constant = {
    user: 'jeff',
    host: 'jefftux',
    search: 'https://searx.be/',
};

//<span id="cursor">_</span>

const StartPage = () => {
    return (
        <div className="startpage">
            <html>
                <body>
                    <p><span>{constant.user}@{constant.host}&nbsp;&gt;&nbsp;&nbsp;</span>startpage -al</p>
                    <nav className="terminal">
                        <ul>
                            <li>General</li>
                            <li><a href="">tmp</a></li>
                            <li><a href="">tmp</a></li>
                            <li><a href="">tmp</a></li>
                        </ul>
                        <ul>
                            <li>Education</li>
                            <li><a href="">tmp</a></li>
                            <li><a href="">tmp</a></li>
                        </ul>
                    </nav>
                    <form autoComplete="off" action={constant.search} method="POST">
                        <label>{constant.user}@{constant.host}<span>&nbsp;</span>&gt;<span>&nbsp;</span></label>
                        <input id="q" name="q" type="search" placeholder="" />
                    </form>
                </body>
            </html>
        </div>
    );
}

export default StartPage;
