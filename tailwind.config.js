/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "aw-dark": "#00010D",
                "aw-darkblue": "#010D26",
                "aw-greyblue": "#163040",
                "aw-grey": "#262626",
                "aw-white": "#F2F2F2"
            },
            backgroundImage: {
                "aw-background": "url('../public/bg-resized-blurred.webp')"
            },
            animation: {
                fadeInLeft: "fadeInLeft 0.5s ease-in-out",
                fadeInTop: "fadeInTop 0.5s ease-in-out",
                fadeInBottom: "fadeInBottom 0.5s ease-in-out",
                opacity: "opacity 0.5s ease-in-out"
            },
            keyframes: {
                fadeInLeft: {
                    "0%": { 
                        "opacity": 0,
                        "margin-left": "-100px",
                        "margin-right": "100px"
                    },
                    "100%": { 
                        "opacity": 1,
                        "margin-left": "0px",
                        "margin-right": "0px"
                    }
                },
                fadeInTop: {
                    "0%": { 
                        "opacity": 0,
                        "margin-top": "-100px",
                        "margin-bottom": "100px"
                    },
                    "100%": { 
                        "opacity": 1,
                        "margin-top": "0px",
                        "margin-bottom": "0px"
                    }
                },
                fadeInBottom: {
                    "0%": { 
                        "opacity": 0,
                        "margin-bottom": "-100px",
                        "margin-top": "100px"
                    },
                    "100%": { 
                        "opacity": 1,
                        "margin-bottom": "0px",
                        "margin-top": "0px"
                    }
                },
                opacity: {
                    "0%": { 
                        "opacity": 0
                    },
                    "100%": { 
                        "opacity": 1
                    }
                }
            }
        },
    },
};
