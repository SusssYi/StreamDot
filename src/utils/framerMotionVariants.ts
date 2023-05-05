const framerMotionVariants = {
    detailBox: {
        hidden: {
            width: 0,
        },
        visible: {
            width: "500px",
        },
    },
    detailBoxContent: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    },
    homePageFadeIn: {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    },
    mainPageFadeIn: {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    },
};
export default framerMotionVariants;
