import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { SiteHeader } from '~/components/SiteHeader'
import { SiteFooter } from '~/components/SiteFooter'
import { WaveDivider } from '~/components/WaveDivider'
import { Eyebrow } from '~/components/Eyebrow'
import { JsonLd } from '~/components/JsonLd'
import { ArrowRight, ArrowUpRight } from '~/components/icons'
import { BUSINESS_LD } from '~/lib/business'
import {
  formatDate,
  getArticle,
  relatedArticles,
  type Article,
  type Block,
} from '~/lib/articles'

const SITE = 'https://www.catchingchromeguideservice.com'

export const Route = createFileRoute('/articles/$slug')({
  loader: ({ params }) => {
    const article = getArticle(params.slug)
    if (!article) throw notFound()
    return article
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    return {
      meta: [
        { title: `${loaderData.title} | Catching Chrome Guide Service` },
        { name: 'description', content: loaderData.excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: `${SITE}${loaderData.image}` },
      ],
      links: [
        { rel: 'canonical', href: `${SITE}/articles/${loaderData.slug}` },
      ],
    }
  },
  component: ArticlePage,
})

function articleLd(a: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.excerpt,
    image: `${SITE}${a.image}`,
    datePublished: a.date,
    dateModified: a.date,
    mainEntityOfPage: `${SITE}/articles/${a.slug}`,
    author: { '@type': 'Person', name: 'Captain Ryan' },
    publisher: { '@type': 'Organization', name: BUSINESS_LD.name },
  }
}

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="!mt-12 font-display text-[clamp(1.5rem,2.4vw,2rem)] uppercase leading-[1] text-ink"
              >
                {b.text}
              </h2>
            )
          case 'ul':
            return (
              <ul key={i} className="space-y-3">
                {b.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 text-[17px] leading-relaxed text-ink/70"
                  >
                    <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="!my-10 rounded-r-2xl border-l-2 border-accent bg-white px-7 py-6 font-display text-[clamp(1.25rem,2vw,1.6rem)] uppercase leading-[1.1] text-ink"
              >
                {b.text}
              </blockquote>
            )
          default:
            return (
              <p key={i} className="text-[17px] leading-[1.8] text-ink/70">
                {b.text}
              </p>
            )
        }
      })}
    </div>
  )
}

function ArticlePage() {
  const article = Route.useLoaderData()
  const related = relatedArticles(article.slug)

  return (
    <>
      <JsonLd data={articleLd(article)} />

      <section className="relative -mb-px h-[58vh] min-h-[400px] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/45 to-ink" />
        </div>

        <SiteHeader />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pt-10 text-center">
          <span className="mb-6 rounded-full bg-cream/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
            {article.category}
          </span>
          <h1 className="max-w-4xl font-display text-3xl uppercase leading-[1.05] tracking-wide text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl">
            {article.title}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-accent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/70 sm:text-[12px]">
              {formatDate(article.date)} · {article.readMins} min read
            </p>
            <span className="h-px w-6 bg-accent" />
          </div>
        </div>

        <WaveDivider fill="fill-cream" />
      </section>

      <main>
        <article className="theme-transition bg-cream pb-20 pt-16 md:pb-24 md:pt-20">
          <div className="mx-auto max-w-3xl px-6 md:px-10">
            <Link
              to="/articles"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-ink"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
              All Articles
            </Link>

            <p className="mt-8 border-b border-ink/10 pb-10 text-[clamp(1.2rem,2vw,1.45rem)] font-medium leading-snug text-ink">
              {article.excerpt}
            </p>

            <div className="mt-10">
              <Body blocks={article.body} />
            </div>

            <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink/10 bg-white p-7 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-xl uppercase leading-none text-ink">
                  Ready to fish it?
                </p>
                <p className="mt-2 text-[15px] text-ink/70">
                  Tell Ryan your dates and who is coming.
                </p>
              </div>
              <a
                href="/contact"
                className="btn-primary group inline-flex shrink-0 items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em]"
              >
                Book A Trip
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section
            data-chapter="dark"
            className="theme-invert bg-ink py-24 md:py-28"
          >
            <div className="mx-auto max-w-[1440px] px-6 md:px-10">
              <Eyebrow label="Keep Reading" tone="light" />
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] uppercase leading-[0.9] text-cream">
                More From <span className="accent-underline text-accent">The Journal</span>
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    to="/articles/$slug"
                    params={{ slug: a.slug }}
                    className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream/70">
                        {a.category}
                      </span>
                      <h3 className="mt-3 font-display text-lg uppercase leading-[1.05] text-cream">
                        {a.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  )
}
