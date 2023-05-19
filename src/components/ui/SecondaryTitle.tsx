// SecondaryTitle for Home page each sections
const SecondaryTitle = ({
    text,
    LineLength = 20,
}: {
    text: string;
    LineLength?: number;
}) => {
    return (
        <div className="relative mb-20 h-auto w-auto">
            <h3 className="relative z-10  font-Oswald text-2xl font-bold text-white  drop-shadow-2xl md:text-3xl lg:text-5xl">
                {text}
            </h3>

            <div className="z-1 absolute -bottom-1 left-0 h-[40%] w-full bg-secondary"></div>
            <div
                style={{
                    height: `${LineLength}vh`,
                }}
                className={`absolute left-[50%]   w-1  bg-secondary `}
            ></div>
        </div>
    );
};

export default SecondaryTitle;
