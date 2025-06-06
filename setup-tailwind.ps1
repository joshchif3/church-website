# Create tailwind.config.js file with the correct configuration
@"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          dark: '#6366f1',
        },
        secondary: {
          light: '#f59e0b',
          dark: '#fbbf24',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
"@ | Out-File -FilePath "tailwind.config.js" -Encoding utf8

Write-Host "tailwind.config.js created successfully!" -ForegroundColor Green

# Also ensure postcss.config.js exists
if (-not (Test-Path "postcss.config.js")) {
  @"
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
"@ | Out-File -FilePath "postcss.config.js" -Encoding utf8
  Write-Host "postcss.config.js created successfully!" -ForegroundColor Green
}

# Install required dependencies if not already installed
if (-not (Test-Path "node_modules/tailwindcss")) {
  npm install -D tailwindcss postcss autoprefixer
  Write-Host "Tailwind CSS dependencies installed!" -ForegroundColor Green
}