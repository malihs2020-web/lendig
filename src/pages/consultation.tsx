import { Clock, Mail, Phone } from 'lucide-react'
import { YandexForm } from '@/components/yandex-form'

export function Consultation() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-medium text-accent">Запись на консультацию</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Расскажите о своей ситуации
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Заполните форму — мы подберём юриста по вашему вопросу и свяжемся
            для назначения удобного времени.
          </p>

          <ul className="mt-10 space-y-5 text-[15px]">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>
                <a href="tel:+70000000000" className="hover:text-accent">
                  +7 (000) 000-00-00
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>
                <a href="mailto:hello@lexconsult.ru" className="hover:text-accent">
                  hello@lexconsult.ru
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>Пн–Пт: 09:00–20:00, Сб: 10:00–16:00</span>
            </li>
          </ul>
        </div>

        <div className="min-w-0">
          <YandexForm formId="6a5cb9ebe010db798b611d1f" />
        </div>
      </div>
    </section>
  )
}
