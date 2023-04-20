/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            boxShadow: {
                "aw-dark-4": "0 0 1rem -0.5rem #00010D",
                "aw-dark-8": "0 0 2rem -1rem #00010D",
            },
            backgroundImage: {
                "aw-background": "url('../public/bg-resized-blurred.webp')"
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                fadeInLeft: "fadeInLeft 0.5s ease-in-out",
                fadeInTop: "fadeInTop 0.5s ease-in-out",
                fadeInBottom: "fadeInBottom 0.5s ease-in-out",
                opacity: "opacity 0.5s ease-in-out"
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "aw-dark": "#00010D",
                "aw-darkblue": "#010D26",
                "aw-greyblue": "#163040",
                "aw-purple": "#9B5CE6",
                "aw-grey": "#262626",
                "aw-white": "#F2F2F2",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
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
        }
    },
    plugins: [require("tailwindcss-animate")],
}
