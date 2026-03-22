import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function Reveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
        { threshold: 0.1 }
      )
      els.forEach(el => { el.classList.remove('visible'); obs.observe(el) })
      return () => obs.disconnect()
    }
    const t = setTimeout(run, 80)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <ScrollTop />
      <Reveal />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',         element: <Home /> },
      { path: '/about',    element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/port',     element: <PortfolioPage /> },
      { path: '/contact',  element: <ContactPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
