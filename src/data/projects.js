// ─────────────────────────────────────────────────────────────
//  PROJECTS DATA  –  Add / edit your projects here
//
//  Each project has:
//    title       : string
//    description : string
//    image       : URL string  (use Unsplash link OR import your own image)
//    liveUrl     : string  (link to live project, or '#')
//    githubUrl   : string  (link to GitHub repo, or '#')
//    tags        : array of tech stack strings
//    category    : 'Frontend' | 'Fullstack' | 'Backend' | 'Mobile'
//    featured    : boolean  (shows on Home page)
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product listings, cart, checkout, and admin dashboard. Built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75',
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/gowinstar55555',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Fullstack',
    featured: true,
  },
  {
    id: 2,
    title: 'Banking Dashboard',
    description: 'A modern fintech dashboard with real-time transaction tracking, analytics charts, and account management built at Billpoint.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
    liveUrl: '#',
    githubUrl: 'https://github.com/gowinstar55555',
    tags: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'Loan Management System',
    description: 'Credit scoring and loan processing application for Fairmoney. Handles thousands of daily loan applications with automated decisioning.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=75',
    liveUrl: '#',
    githubUrl: 'https://github.com/gowinstar55555',
    tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Redis'],
    category: 'Fullstack',
    featured: true,
  },
  {
    id: 4,
    title: 'Project Management App',
    description: 'Kanban-style project tracker with drag-and-drop tasks, team collaboration, and deadline notifications.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=75',
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/gowinstar55555',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate Listings',
    description: 'Property search platform with advanced filters, map integration, and agent contact system.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75',
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/gowinstar55555',
    tags: ['Next.js', 'Prisma', 'Google Maps API'],
    category: 'Fullstack',
    featured: false,
  },
  {
    id: 6,
    title: 'Restaurant Website',
    description: 'Modern restaurant site with online menu, table reservations, and WhatsApp order integration.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=75',
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/gowinstar55555',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    category: 'Frontend',
    featured: false,
  },
]

export default projects
