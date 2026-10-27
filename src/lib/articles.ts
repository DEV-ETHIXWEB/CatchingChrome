/**
 * Articles shown on /articles and /articles/$slug.
 *
 * Content lives here as plain data (no CMS) so a new article is one more entry
 * in `ARTICLES`. Bodies are small block lists rather than markdown so the page
 * can style every element with the site's own tokens.
 *
 * Text in `p` and `ul` blocks may contain inline links as [anchor](url).
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
  | { type: 'img'; src: string; alt: string; caption?: string }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'cta'; label: string; href: string }

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
export const ARTICLES: Article[] = [
  {
    slug: 'columbia-river-fishing-report-october',
    title: 'Columbia River Fishing Report: October Coho Bite',
    excerpt:
      'Columbia River fishing report for October: coho are being kept, while Chinook and sturgeon go back in. The latest ODFW numbers, explained for your trip.',
    category: 'Salmon',
    date: '2026-10-27',
    readMins: 7,
    image: '/Gallery/opt/20230929_091400-scaled-full.webp',
    imageAlt:
      'Angler holding a coho salmon aboard a guide boat on the Columbia River in the Gorge',
    body: [
      {
        type: 'p',
        text: `Before the sun clears the hills, the boats are already out, small dark shapes on a flat, silver river. That is how a fall day starts on the Columbia, and it is still how the day starts in late October. This Columbia River fishing report for October draws on the numbers the state published on October 22, then turns them into something you can use if you are deciding whether to book a trip.`,
      },
      {
        type: 'img',
        src: '/Gallery/opt/rsw_1280h_960-3-full.webp',
        alt: 'Sunrise over the Columbia River with guide boats scattered across calm water',
        caption: 'Where the day starts',
      },
      { type: 'h2', text: 'The Columbia River fishing report for October, in plain English' },
      {
        type: 'p',
        text: `ODFW's [Columbia Zone fishing report](https://myodfw.com/recreation-report/fishing-report/columbia-zone) covers the week ending October 17. It calls coho fishing fair to good near the mouths of some tributaries, and coho are the fish people are keeping.`,
      },
      {
        type: 'p',
        text: `Anglers kept 50 coho between Warrior Rock Lighthouse and Longview Bridge, and 81 in the Bonneville Pool. Buoy 10 added 16 kept and 13 released.`,
      },
      {
        type: 'p',
        text: `Chinook tell a different story. Anglers released them, and none were reported kept. The Gorge saw 51 Chinook released and the Bonneville Pool saw 39. Every sturgeon in the report went back in the water too.`,
      },
      {
        type: 'p',
        text: `One caution from ODFW itself: the agency says it is pausing parts of its Recreation Report during a revamp, so some zone details are thin right now. For anything that decides your trip, go to the sources linked at the bottom of this post rather than relying on a single week of counts.`,
      },
      { type: 'h2', text: 'How to read these numbers' },
      {
        type: 'p',
        text: `A weekly count reflects the anglers who fished that week. A low number can mean few boats were out rather than few fish in the river, and one week of weather can swing results either way.`,
      },
      {
        type: 'p',
        text: `Use the counts to spot a pattern, such as coho showing up near tributary mouths and in the Gorge. Then let a guide fill in what happened yesterday, because the fish move faster than a weekly report can.`,
      },
      { type: 'h2', text: 'Coho: where the action has been' },
      {
        type: 'p',
        text: `ODFW's [weekly recreation report](https://myodfw.com/recreation-report) says coho are moving upstream and that salmon fishing is good in bays and estuaries. On the Columbia, the kept counts from Longview up to the Bonneville Pool show where the fish have been biting this month.`,
      },
      {
        type: 'p',
        text: `Captain Ryan's own Oregon salmon calendar rates coho as excellent in October and good in November. Coho are aggressive, acrobatic and a lot of fun on lighter gear, which is why they suit families and first-time anglers so well.`,
      },
      {
        type: 'img',
        src: '/Gallery/opt/20230929_091400-scaled-full.webp',
        alt: 'Angler holding a coho salmon on the Columbia River with the Gorge hills behind',
        caption: 'A silver in the Gorge',
      },
      {
        type: 'p',
        text: `A coho trip is also a good way to see how the day works before you commit to a bigger fish. Ryan handles the boat and the positioning. You handle the rod.`,
      },
      { type: 'h2', text: 'Fall Chinook: in the river, mostly released' },
      {
        type: 'p',
        text: `The Chinook are there. The report counts 90 of them released across the Gorge and the Bonneville Pool. Whether you may keep one on a given day depends on in-season rules, and those move quickly.`,
      },
      {
        type: 'p',
        text: `ODFW's [September 23 notice](https://myodfw.com/news/recreational-chinook-and-coho-fishing-days-added-columbia-river) shows how fast. It added weekend and midweek days in late September for Chinook and coho, then set unmarked coho retention upstream of west Puget Island for October 1 through 15. That window ended on October 15 as announced, so check for any extension before you plan around it.`,
      },
      {
        type: 'p',
        text: `Ryan's calendar rates fall Chinook excellent in October and good in November. To see what a day on the water includes, read the [fall Chinook trip page](/fall-chinook).`,
      },
      { type: 'h2', text: 'Sturgeon: released, and some are big' },
      {
        type: 'p',
        text: `Every sturgeon in the report was released. The Dalles Pool had 32 released: 3 sub-legal, 15 legal and 14 over-legal. John Day Pool had 7, with 4 legal and 3 over-legal.`,
      },
      {
        type: 'p',
        text: `The report sorts sturgeon by size. Sub-legal fish are under the keepable size, over-legal fish are above it, and legal fish fall in the size range where keeping may be allowed on open days. Big over-legal fish are the ones that make the photos.`,
      },
      {
        type: 'p',
        text: `Sturgeon retention is tightly controlled and set by the state, and most of our sturgeon fishing is catch and release. If a long fight and a photo are what you want, the [sturgeon trip page](/sturgeon) covers what to expect.`,
      },
      { type: 'h2', text: 'What a late-season day looks like on the boat' },
      {
        type: 'img',
        src: '/Gallery/opt/rsw_1280h_960-5-full.webp',
        alt: 'A family aboard the guide boat with rods set out behind it, waiting on the bite',
        caption: 'Rods out, waiting on the bite',
      },
      {
        type: 'p',
        text: `In the photo above, a family has the rods set out behind the boat and is waiting on a bite. That is the shape of most salmon trips: lines in the water, a quiet stretch, then the rod loads.`,
      },
      {
        type: 'p',
        text: `Fall trips start with an early launch. Rods, tackle and coaching are all aboard, and your catch leaves filleted, cleaned and packed. You do not need experience. You do need warm layers and a rain jacket, because late October on the river is cold and often damp.`,
      },
      {
        type: 'p',
        text: `Ryan picks the river running best on your dates, which is why a call before you book is worth more than any calendar. Tell him who is coming and how much fishing experience the group has, and he will plan the day around that.`,
      },
      {
        type: 'img',
        src: '/Gallery/opt/Screenshot_20240922_164012_Messages-full.webp',
        alt: 'A woman and two teenage boys at the boat ramp holding six coho salmon',
        caption: 'Six silvers and a very full cooler',
      },
      {
        type: 'p',
        text: `Bring a cooler if you are driving far. The full trip list, including what each outing costs, is on the [excursions page](/excursions) and the [pricing page](/pricing).`,
      },
      { type: 'h2', text: 'Planning ahead: November, December and steelhead' },
      {
        type: 'p',
        text: `Ryan's salmon calendar rates both coho and fall Chinook as good in November. In December it rates fall Chinook as fair and coho as poor, so the salmon window is closing as the year ends.`,
      },
      {
        type: 'p',
        text: `Winter steelhead pick up where salmon leave off. ODFW's [Northwest Zone page](https://myodfw.com/fishing/northwest-zone) says winter steelhead enter rivers from November or December and can continue through April, depending on fall rains. Ryan runs drift-boat steelhead trips on quiet water, described on the [winter steelhead page](/winter-steelhead).`,
      },
      {
        type: 'img',
        src: '/Gallery/opt/20200920_100218-scaled-full.webp',
        alt: 'A father and two young sons on the riverbank holding three salmon',
        caption: 'One dad, two boys, three fish',
      },
      {
        type: 'p',
        text: `If you fish trout as well, note that ODFW's October 22 report says many rivers close to trout fishing on October 31 to protect spawning and over-wintering fish.`,
      },
      { type: 'h2', text: 'Check these before you go' },
      {
        type: 'ul',
        items: [
          `Read the current [Oregon sport fishing regulations and updates](https://myodfw.com/articles/oregon-fishing-hunting-regulations-and-updates). Open sections and bag limits can change from week to week.`,
          `Check the latest counts in the [Columbia Zone report](https://myodfw.com/recreation-report/fishing-report/columbia-zone).`,
          `The Oregon Health Authority advises limiting consumption of some fish from parts of the Columbia River because of mercury and PCBs, including a Bonneville Dam advisory. ODFW's report carries the notice.`,
          `Ask Ryan what you need for your date when you book. He will tell you what is open.`,
        ],
      },
      { type: 'h2', text: 'Frequently asked questions' },
      {
        type: 'faq',
        items: [
          {
            q: 'What is biting on the Columbia River in late October?',
            a: `Coho. ODFW's October 22 report calls coho fishing fair to good near the mouths of some tributaries. Chinook and sturgeon were released, not kept.`,
          },
          {
            q: 'Can I keep a Chinook or sturgeon right now?',
            a: `The report shows only releases for both. Retention rules are set by the state and change in-season, so check the [regulations updates](https://myodfw.com/articles/oregon-fishing-hunting-regulations-and-updates) or ask Ryan before you go.`,
          },
          {
            q: 'When does winter steelhead fishing start?',
            a: `ODFW says winter steelhead enter rivers from November or December and can continue through April, depending on fall rains. See the [winter steelhead page](/winter-steelhead).`,
          },
          {
            q: 'Do I need fishing experience for a coho trip?',
            a: `No. Rods, tackle and coaching are aboard, and Ryan handles the boat. Beginners and kids are welcome.`,
          },
          {
            q: 'What should I bring on a fall trip?',
            a: `Warm layers, a rain jacket, non-slip shoes, snacks and a cooler for your fish. Rods, tackle and bait are aboard.`,
          },
          {
            q: 'How do I book a trip?',
            a: `Use the [contact page](/contact) or call (503) 936-9090 and tell Ryan your dates and who is coming.`,
          },
        ],
      },
      { type: 'cta', label: 'Book your trip with Ryan', href: '/contact' },
    ],
  },
]

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
