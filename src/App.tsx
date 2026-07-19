import { Routes, Route } from 'react-router-dom'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Landing } from '@/pages/landing'
import { Consultation } from '@/pages/consultation'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
