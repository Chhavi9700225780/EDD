cat > tailwind.config.cjs <<'EOF'
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF
