import './index.sass';

const constant = {
    user: 'jeff',
    host: 'jefftux',
};

const StartPage = () => {
    return (
        <div className="start-page">
            <div className="html">
                <div className="body">
                    <p><span>{constant.user}@{constant.host}  &gt; </span>newtab</p>
                    <nav className="terminal">
                        <ul>
                            <li>general</li>
                            <li><a href="">tmp</a></li>
                            <li><a href="">tmp</a></li>
                            <li><a href="">tmp</a></li>
                        </ul>
                        <ul>
                            <li>education</li>
                            <li><a href="">tmp</a></li>
                            <li><a href="">tmp</a></li>
                        </ul>
                    </nav>
                    <p><span>{constant.user}@{constant.host} &gt; </span> <span id="cursor">_</span></p>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
