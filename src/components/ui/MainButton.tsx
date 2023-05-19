//  primaryButton for the Home page and secondaryButton
const MainButton = (
    {
        text,
        style,
        shadow,
        onClick,
    }: {
        text: string;
        style: "dark" | "light";
        className?: string;
        shadow?: boolean;
        onClick?: () => void;
    },
    ...props: any[]
) => {
    return style === "dark" ? (
        <div
            className={` z-40 cursor-pointer px-4 py-2 text-base font-bold text-white md:px-8 md:py-4 md:text-xl  ${
                shadow ? "shadow-md shadow-secondary" : ""
            }`}
            onClick={onClick}
        >
            {text}
        </div>
    ) : (
        <div
            className={` z-40 cursor-pointer rounded-md bg-secondary px-4 py-2 text-base font-bold text-white md:px-8 md:py-4  md:text-xl ${
                shadow ? "shadow-secondary drop-shadow-2xl" : ""
            } `}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default MainButton;
