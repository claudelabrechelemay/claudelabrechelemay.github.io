import tailwindCSSanimate from 'tailwindcss-animate'
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class', 'dark'],
	content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./hooks/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
		'./nav/**/*.{js,ts,jsx,tsx,mdx}',
		'./mdx-components.tsx',
		'./config.ts'
  ],
  theme: {
		extend: {
			screens: {
				short: {
					raw: '(min-height: 600px) and (min-width: 768px)'
				}
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		fontFamily: {
			main: [
				'"Benton Sans Regular"',
				'"Franklin Gothic"',
				'"Helvetica Neue"',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'Helvetica',
				'Arial',
				'system-ui',
				'sans-serif'
			],
			sidebar: ['"Benton Sans Regular"',
				'"Franklin Gothic"',
				'"Helvetica Neue"',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'Helvetica',
				'Arial',
				'system-ui',
				'sans-serif'
			],
			sidebarHeader: ['"Benton Sans Thin"',
				'"Franklin Gothic Light"',
				'"Helvetica Neue Light"',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI Light"',
				'Roboto Light',
				'Helvetica Light',
				'Arial',
				'system-ui',
				'sans-serif'
			],
			sidebarSocials: ['"Benton Sans Book"',
				'"Franklin Gothic Book"',
				'"Helvetica Neue"',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'Helvetica',
				'Arial',
				'system-ui',
				'sans-serif'
			],
			copyright: ['"Helvetica Neue"',
				'"Franklin Gothic"',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'Helvetica',
				'Arial',
				'system-ui',
				'sans-serif'
			]
		}
  },
  plugins: [tailwindCSSanimate]
}

export default config
