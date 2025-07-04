const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(214.3 31.8% 91.4%)',
  			input: 'hsl(214.3 31.8% 91.4%)',
  			ring: 'hsl(222.2 84% 4.9%)',
  			background: 'hsl(0 0% 100%)',
  			foreground: 'hsl(222.2 84% 4.9%)',
  			primary: {
  				DEFAULT: 'hsl(222.2 47.4% 11.2%)',
  				foreground: 'hsl(210 40% 98%)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(210 40% 96%)',
  				foreground: 'hsl(222.2 84% 4.9%)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(0 84.2% 60.2%)',
  				foreground: 'hsl(210 40% 98%)'
  			},
  			muted: {
  				DEFAULT: 'hsl(210 40% 96%)',
  				foreground: 'hsl(215.4 16.3% 46.9%)'
  			},
  			accent: {
  				DEFAULT: 'hsl(210 40% 96%)',
  				foreground: 'hsl(222.2 84% 4.9%)'
  			},
  			popover: {
  				DEFAULT: 'hsl(0 0% 100%)',
  				foreground: 'hsl(222.2 84% 4.9%)'
  			},
  			card: {
  				DEFAULT: 'hsl(0 0% 100%)',
  				foreground: 'hsl(222.2 84% 4.9%)'
  			}
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		},
  		keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
        aurora: "aurora 60s linear infinite",
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
}
