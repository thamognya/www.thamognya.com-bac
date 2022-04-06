import './index.sass';
import Typewriter from 'typewriter-effect';
import {FaArrowDown} from 'react-icons/fa';

const First = () => {
    return (
        <section className="first" id="1">
            <div className="type">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hello, my name is Thamognya')
.start();
                    }} 
                />
            </div>
            <div className="subtitle">
                <h2>Welcome to my website.</h2>
                <h2>Scroll down</h2>
                <FaArrowDown />
            </div>
        </section>
    );
}

export default First;
