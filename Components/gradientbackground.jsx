
import violet from '../assets/violet.png';

const GradientBackground = ({ color, children }) => {
    return (
        <div className={`h-full w-full flex-1 items-center flex justify-center`}>
            <div className="fixed w-screen h-screen lg:h-full lg:w-full opacity-60 mix-blend-color-dodge pointer-events-none">
                <div className="fixed top-1/2 left-1/2 w-screen h-screen lg:h-full lg:w-full -translate-x-3/4 -translate-y-1/2">
                    <img
                        className="w-full h-full"
                        src={violet.src}
                        alt="Gradient"
                    />
                </div>
            </div>
            {children}
        </div>
    );
};

export default GradientBackground;
