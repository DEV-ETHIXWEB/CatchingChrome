/**
 * Articles shown on /articles and /articles/$slug.
 *
 * Content lives here as plain data (no CMS) so a new article is one more entry
 * in `ARTICLES`. Bodies are small block lists rather than markdown so the page
 * can style every element with the site's own tokens.
 *
 * Keep copy free of em/en dashes, and avoid regulation specifics (seasons,
 * limits, retention rules): those change every year and the articles point
 * readers to Ryan or ODFW instead.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export type ArticleCategory = 'Salmon' | 'Steelhead' | 'Sturgeon' | 'Crabbing' | 'Trip Prep'

export type Article = {
  slug: string
  title: string
  /** Shown on cards and as the meta description. */
  excerpt: string
  category: ArticleCategory
  /** ISO date (YYYY-MM-DD). */
  date: string
  readMins: number
  image: string
  imageAlt: string
  body: Block[]
}

export const CATEGORIES: ArticleCategory[] = [
  'Salmon',
  'Steelhead',
  'Sturgeon',
  'Crabbing',
  'Trip Prep',
]

/**
 * Newest content goes anywhere in the list: the pages sort by `date`.
 * The /articles page shows a "coming soon" state while this is empty.
 */
export const ARTICLES: Article[] = []

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function relatedArticles(slug: string, count = 3): Article[] {
  const current = getArticle(slug)
  const others = ARTICLES.filter((a) => a.slug !== slug)
  // Same-category first, then the rest in list order.
  others.sort(
    (a, b) =>
      Number(b.category === current?.category) -
      Number(a.category === current?.category),
  )
  return others.slice(0, count)
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
