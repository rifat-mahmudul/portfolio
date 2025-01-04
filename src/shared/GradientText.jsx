/* eslint-disable react/prop-types */
export default function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = true,
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };
    
        return (
        <div
            className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-3xl font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
        >
            {showBorder && (
            <div
                className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
                style={{
                ...gradientStyle,
                backgroundSize: "300% 100%",
                }}
            >
                <div
                className="absolute inset-0 bg-background rounded-[1.25rem] z-[-1]"
                style={{
                    width: "calc(100% - 2px)",
                    height: "calc(100% - 2px)",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                ></div>
            </div>
            )}
            <div
            className="inline-block relative z-2 text-white"
            >
            {children}
            </div>
        </div>
        );
    }