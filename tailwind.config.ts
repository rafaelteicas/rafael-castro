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
        sidebar: '95%',
      },
      colors: {
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--foreground))',
        shadow: 'hsl(var(--shadow))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
      },
      boxShadow: {
        navbar: '0 0 0 1px',
        links: '0 0 0 1px',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
