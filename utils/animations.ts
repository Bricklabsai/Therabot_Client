export const fallWithFade = {
    initial: {
        y: -50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "smooth",
            // ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0,
        },
    },
}

export const riseWithFade = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "smooth",
            // ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0,
        },
    },
}


export const fadeFromLeft = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "smooth",
            // ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0,
        },
    }
}


export const fadeFromRight = {
    initial: {
        x: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "smooth",
            // ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0,
        },
    }
}


export const slideFromLeft = {
    initial: {
        x: -30,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "smooth",
            // ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0,
        },
    }
}



export const slideFromRight = {
    initial: {
        x: 30,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "smooth",
            // ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0,
        },
    }
}

export const popOut = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "smooth",
            duration: 0
        }
    }
}