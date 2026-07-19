import { Link } from 'react-router-dom'
import {
  Scale,
  Building2,
  Home,
  Users,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Building2,
    title: 'Корпоративное право',
    description:
      'Регистрация и сопровождение бизнеса, договоры, корпоративные споры и M&A.',
  },
  {
    icon: Scale,
    title: 'Налоговые споры',
    description:
      'Защита в спорах с ФНС, налоговый аудит, снижение рисков доначислений.',
  },
  {
    icon: Home,
    title: 'Недвижимость',
    description:
      'Сделки купли-продажи, аренда, споры с застройщиками и долевое строительство.',
  },
  {
    icon: Users,
    title: 'Семейное право',
    description:
      'Развод, раздел имущества, алименты, брачные договоры и опека.',
  },
  {
    icon: Briefcase,
    title: 'Трудовые споры',
    description:
      'Незаконное увольнение, взыскание зарплаты, споры с работодателем.',
  },
  {
    icon: ShieldCheck,
    title: 'Интеллектуальная собственность',
    description:
      'Регистрация товарных знаков, защита авторских прав, патентные споры.',
  },
]

const stats = [
  { value: '15 лет', label: 'практики' },
  { value: '1 200+', label: 'выигранных дел' },
  { value: '98%', label: 'довольных клиентов' },
  { value: '24 часа', label: 'на первый ответ' },
]

const steps = [
  {
    title: 'Оставьте заявку',
    description: 'Заполните короткую форму — это займёт меньше минуты.',
  },
  {
    title: 'Мы свяжемся с вами',
    description: 'Юрист перезвонит в течение рабочего дня и уточнит детали.',
  },
  {
    title: 'Консультация',
    description: 'Разберём ситуацию и ответим на все вопросы — очно или онлайн.',
  },
  {
    title: 'План действий',
    description: 'Получите чёткую стратегию и, при необходимости, договор на сопровождение.',
  },
]

const reviews = [
  {
    name: 'Андрей К.',
    role: 'Генеральный директор, ООО «Стройсервис»',
    text: 'Помогли выйти из сложного корпоративного спора с минимальными потерями. Всё чётко и по делу.',
  },
  {
    name: 'Марина В.',
    role: 'Частный клиент',
    text: 'Развод с разделом имущества прошёл спокойно благодаря грамотному сопровождению юриста.',
  },
  {
    name: 'Игорь П.',
    role: 'ИП',
    text: 'Отбили необоснованные претензии налоговой. Разложили всё по полочкам и были на связи всегда.',
  },
]

export function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,106,0.18),_transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-32 text-center">
          <Reveal>
            <p className="text-sm font-medium text-[#d4af6a]">
              Юридическая консультация
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              Право на вашей
              <br />
              стороне.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Опытные юристы решают сложные вопросы бизнеса и частных лиц —
              честно, быстро и без юридического жаргона.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/consultation">
                  Записаться на консультацию
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href="#services">Смотреть услуги</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Practice areas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Полный спектр юридических услуг для бизнеса и частных лиц.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 60}>
                <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <service.icon className="size-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-muted px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Как проходит консультация
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Прозрачный процесс от первого обращения до решения вопроса.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="flex size-10 items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-accent-foreground">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-background px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Нам доверяют
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 80}>
                <Card className="h-full">
                  <p className="text-[15px] leading-relaxed text-foreground">
                    «{review.text}»
                  </p>
                  <p className="mt-6 text-sm font-medium">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-black px-6 py-28 text-white">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#d4af6a]" /> Бесплатная первая консультация
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#d4af6a]" /> Онлайн и очно
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#d4af6a]" /> Ответ в течение дня
            </li>
          </ul>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Готовы обсудить вашу ситуацию?
          </h2>
          <Button asChild size="lg" className="mt-8">
            <Link to="/consultation">
              Записаться на консультацию
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  )
}
