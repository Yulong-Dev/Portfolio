# George Godwin – Portfolio v2.0

Professional developer portfolio built with **React + Vite + Tailwind CSS**.
Zero separate CSS files. Fully Tailwind-powered.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav with active link highlight
│   ├── Footer.jsx         # Footer with social links
│   └── ProjectCard.jsx    # Reusable project card (image + links)
├── pages/
│   ├── Home.jsx           # Hero, Featured Projects, Services, CTA
│   ├── AboutPage.jsx      # Bio, Skills, Experience timeline
│   ├── ServicesPage.jsx   # Services, process steps
│   ├── PortfolioPage.jsx  # All projects with category filter
│   └── ContactPage.jsx    # Contact form (web3forms) + info
├── data/
│   ├── projects.js        # ← ADD YOUR PROJECTS HERE
│   └── services.js        # Services list
└── index.css              # Tailwind only, no custom CSS
```

## 🖼️ How to Add a Project

Open `src/data/projects.js` and add a new object:

```js
{
  id: 7,                          // unique number
  title: 'My New Project',
  description: 'What it does...',
  image: 'https://your-image-url.com/screenshot.jpg',  // or import a local image
  liveUrl: 'https://yourproject.com',   // use '#' if no live link
  githubUrl: 'https://github.com/you/repo',  // use '#' if private
  tags: ['React', 'Node.js', 'MongoDB'],
  category: 'Fullstack',          // 'Frontend' | 'Fullstack' | 'Backend' | 'Mobile'
  featured: true,                 // shows on Home page if true
}
```

## 🖼️ Using a Local Image

```js
// At top of projects.js:
import myProjectImg from '../assets/my-project.png'

// In the project object:
image: myProjectImg,
```

## 🎨 Design
- **Theme**: Dark slate + cyan accent
- **Fonts**: Syne (display) · Outfit (body) · JetBrains Mono (code)
- **Colors**: slate-950 bg · cyan-400/500 accent

## 🔧 Customize
- Your name/bio: `src/pages/Home.jsx` and `src/pages/AboutPage.jsx`
- Contact email: `src/pages/ContactPage.jsx`
- Social links: `src/components/Footer.jsx`
- Resume link: search for `drive.google.com` across all files
