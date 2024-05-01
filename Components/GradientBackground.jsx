
const GradientBackground = ({ color, children }) => {
    return (
        <div className={`h-full w-full flex justify-center`}>
            <div className={`${color} absolute w-500 h-500 backdrop-blur-3xl`}></div>
            {children}
        </div>
    );
};

export default GradientBackground;
