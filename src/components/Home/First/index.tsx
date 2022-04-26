import './index.sass';
import Typewriter from 'typewriter-effect';

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
        </section>
    );
}

export default First;
