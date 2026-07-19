export function SiteFooter() {
  return (
    <footer id="contacts" className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-[17px] font-semibold tracking-tight">
              Lex Consult
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Юридическая консультация для бизнеса и частных лиц.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Контакты</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+70000000000" className="hover:text-foreground">
                  +7 (000) 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lexconsult.ru"
                  className="hover:text-foreground"
                >
                  hello@lexconsult.ru
                </a>
              </li>
              <li>Москва, Пресненская наб., 6</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Часы работы</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Пн–Пт: 09:00–20:00</li>
              <li>Сб: 10:00–16:00</li>
              <li>Вс: выходной</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Юридическая информация</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>ИНН 0000000000</li>
              <li>ОГРН 0000000000000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lex Consult. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
