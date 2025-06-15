import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: "#f8fafc",
				foreground: "#151515",
				primary: {
					DEFAULT: '#037a49', // sophisticated green
					foreground: '#f3f6ee'
				},
				green: {
				  light: '#95F9CF',
				  DEFAULT: '#25B585',
				  dark: '#037a49',
				  accent: '#00c481',
				},
				gold: "#F59E0B",
				dark1: "#171717",
				dark2: "#111010",
				gray: "#3f3f46",
				secondary: {
					DEFAULT: '#e6f2eb',
					foreground: '#103929'
				},
				accent: {
					DEFAULT: "#E0F7EF",
					foreground: "#1f4439"
				},
        card: {
          DEFAULT: "#fff",
          foreground: "#181818"
        },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				inter: ['Inter', 'Arial', 'sans-serif']
			},
      boxShadow: {
        'card': '0 4px 32px 0 rgba(61, 91, 52, 0.13), 0 1.5px 6px 0 rgba(44, 166, 114, 0.06)', // soft sophisticated shadow
        'glow-green': '0 0 0 3px #25B58530',
        'gold-bar': '0 2px 12px #F6EEC730'
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(120deg,#E0F7EF 40%,#fff 100%)",
        'diagonal-texture': "repeating-linear-gradient(135deg,rgba(32,180,100,0.04) 0 16px,transparent 16px 32px)"
      },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
						height: '0'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'scale-in': {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
        'stagger-enter': {
          '0%': { opacity: "0", transform: "translateY(30px)" },
          '100%': { opacity: "1", transform: "translateY(0)" }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.35s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
        "stagger-enter": "stagger-enter 0.7s cubic-bezier(0.73,0.09,0.41,0.93) both",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
