# Personal Portfolio

A modern, professional portfolio website built with React, Vite, and GSAP animations.

## Features

- ✨ Modern, responsive design
- 🎨 Professional dark theme with gradient accents
- ⚡ Smooth GSAP animations and scroll effects
- 📱 Mobile-friendly layout
- 📊 Interactive skills showcase
- 🎯 Project cards with detailed pages
- 📬 Contact form
- 🔧 Admin dashboard for content management
- 📄 Resume download functionality
- 🔗 Social media links

## Tech Stack

- **Frontend:** React 18, Vite
- **Animations:** GSAP
- **Routing:** React Router DOM
- **Icons:** Font Awesome
- **Backend/Database:** Supabase (optional)

## Color Scheme

- **Primary Dark:** #0f172a (Background)
- **Primary Medium:** #1e293b (Cards)
- **Primary Light:** #334155 (Borders)
- **Accent Primary:** #3b82f6 (Blue)
- **Accent Secondary:** #8b5cf6 (Purple)
- **Accent Tertiary:** #06b6d4 (Cyan)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Setting Up Supabase (Optional)

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings → API to get your credentials
4. Update `src/config/supabase.js` with your Supabase URL and anon key

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   └── Footer.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── ProjectDetail.jsx
│   ├── ProjectDetail.css
│   ├── AdminDashboard.jsx
│   └── AdminDashboard.css
├── config/
│   └── supabase.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Updating Personal Information

Edit the following files to customize your portfolio:

- `src/pages/Home.jsx` - Update name, title, about section, skills, projects, education, experience, contact info
- `src/components/Navbar.jsx` - Update logo/name
- `src/components/Footer.jsx` - Update footer content and social links
- `src/pages/ProjectDetail.jsx` - Update project details
- `src/pages/AdminDashboard.jsx` - Dashboard customization

### Adding Your Resume

Place your resume PDF in the `public` folder and name it `resume.pdf`.

### Adding Custom Images

Replace the placeholder images in `src/pages/Home.jsx` and `src/pages/ProjectDetail.jsx` with your own images.

## License

MIT
