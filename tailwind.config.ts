import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#749D1C",
                    
          "primary-content": "#fff",
                    
          "secondary": "#AAE5CC",
                    
          "secondary-content": "#010a0a",
                    
          "accent": "#48B89F",
                    
          "accent-content": "#010a0a",
                    
          "neutral": "#9ca3af",
                    
          "neutral-content": "#090a0b",
                    
          "base-100": "#ffff",
                    
          "base-200": "#dedede",
                    
          "base-300": "#bebebe",
                    
          "base-content": "#161616",
                    
          "info": "#009ff1",
                    
          "info-content": "#000914",
                    
          "success": "#50c878",
                    
          "success-content": "#020f05",
                    
          "warning": "#fbc02d",
                    
          "warning-content": "#150e01",
                    
          "error": "#E94b3c",
                    
          "error-content": "#130201",
                    },
        },
      ],
  },
} satisfies Config;
