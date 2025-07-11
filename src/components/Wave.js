// WaveAnimation.jsx


const Wave = () => {
    const lines = Array.from({ length: 12 });

    return (
        <div className="wave-container">
            <svg viewBox="0 0 1440 512" xmlns="http://www.w3.org/2000/svg">
                {lines.map((_, i) => (
                    <path
                        key={i}
                        d={`
              M 0 ${256 + i * 2}
              C 360 ${256 + Math.sin(i) * 80},
                1080 ${256 - Math.sin(i) * 80},
                1440 ${256 + i * 2}
            `}
                        className="wave-line"
                        style={{
                            animationDelay: `${i * 0.1}s`,
                            opacity: `${1 - i * 0.05}`
                        }}
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                    />
                ))}
            </svg>
        </div>
    );
};

export default Wave;
