import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Как мы работаем', href: '/#process' },
  { label: 'Отзывы', href: '/#reviews' },
  { label: 'Контакты', href: '/#contacts' },
]

export function SiteHeader() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-[17px] font-semibold tracking-tight">
          Lex&nbsp;Consult
        </Link>

        {isHome && (
          <nav className="hidden items-center gap-8 text-[13px] text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <Button asChild size="sm">
          <Link to="/consultation">Записаться</Link>
        </Button>
      </div>
    </header>
  )
}
