import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Clock, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const topics = [
  'Корпоративное право',
  'Налоговые споры',
  'Недвижимость',
  'Семейное право',
  'Трудовые споры',
  'Интеллектуальная собственность',
  'Другое',
]

export function Consultation() {
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
        <CheckCircle2 className="size-14 text-accent" strokeWidth={1.5} />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Заявка отправлена
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Спасибо! Юрист свяжется с вами в течение рабочего дня, чтобы
          согласовать время консультации.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">На главную</Link>
        </Button>
      </section>
    )
  }

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

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border bg-surface p-8 shadow-sm sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" name="name" placeholder="Иван Иванов" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
          </div>

          <div className="mt-6 grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="mt-6 grid gap-2">
            <Label htmlFor="topic">Тема консультации</Label>
            <select
              id="topic"
              name="topic"
              required
              defaultValue=""
              className="h-12 w-full rounded-md border border-border bg-surface px-4 text-[15px] text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
            >
              <option value="" disabled>
                Выберите тему
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 grid gap-2">
            <Label htmlFor="message">Опишите ситуацию</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Коротко расскажите, что произошло и какая помощь нужна"
            />
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 size-4 rounded border-border accent-[var(--color-accent)]"
            />
            Согласен на обработку персональных данных
          </label>

          <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  )
}
