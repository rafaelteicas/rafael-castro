import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderWidth: {
        links: '1px',
      },
      gridTemplateColumns: {
        app: 'minmax(16rem, 18rem) auto',
      },
      maxWidth: {
        app: '1280px',
      },
      height: {
        sidebar: '80%',
      },
      colors: {
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--foreground))',
        shadow: 'hsl(var(--shadow))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'muted-foreground': 'hsl(var(--muted-foreground))',
      },
      boxShadow: {
        navbar: '0 0 0 1px',
        links: '0 0 0 1px',
        eye: 'inset 0px 1px 10px 3px rgba(0,0,0,0.7)',
      },
      blur: {
        xs: '2px',
        xxs: '0.4px',
      },
    },
  },
  plugins: [],
}
export default config
