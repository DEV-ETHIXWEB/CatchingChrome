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

export const ARTICLES: Article[] = [
  {
    slug: 'when-to-fish-oregon-salmon',
    title: 'When to Fish Oregon Salmon, Month by Month',
    excerpt:
      'Spring, summer and fall Chinook plus coho each have their own window. Here is how the Oregon year lines up, and which river to pick for each run.',
    category: 'Salmon',
    date: '2026-10-24',
    readMins: 5,
    image: '/fallchinook.webp',
    imageAlt: 'Angler holding a bright fall Chinook salmon on an Oregon river',
    body: [
      {
        type: 'p',
        text: 'Oregon does not have one salmon season. It has four overlapping runs, and the right month depends entirely on which fish you want. Pick the run first, then the river, then the date.',
      },
      { type: 'h2', text: 'Spring Chinook: April and May' },
      {
        type: 'p',
        text: 'The first big run of the year and the one many locals wait for. Spring Chinook are prized for rich, high-fat meat, and the best fishing usually lands in April and May on the Willamette, Clackamas, Sandy, McKenzie and Rogue.',
      },
      { type: 'h2', text: 'Summer Chinook: July' },
      {
        type: 'p',
        text: 'Bright, hard-fighting fish that peak in warm mid-summer water on the upper Columbia, Deschutes and John Day. If you want heat, long days and a strong pull, July is the month.',
      },
      { type: 'h2', text: 'Fall Chinook: late August through October' },
      {
        type: 'p',
        text: 'Our best pure king fishery. Fish arrive chrome-bright and full of fight, and the Columbia, Rogue, Umpqua, Wilson, Trask, Nestucca and Nehalem all produce. This is the season anglers travel across the country for.',
      },
      { type: 'h2', text: 'Coho: September and October' },
      {
        type: 'p',
        text: 'Aggressive, acrobatic silvers flood the coastal rivers and bays in fall. Think Tillamook Bay, the Siletz, Alsea, Siuslaw, Coos and Coquille. Coho are a blast on lighter gear and a great pick for families.',
      },
      {
        type: 'quote',
        text: 'The calendar tells you where to start. Water level, tides and what the fish did yesterday tell you where to finish.',
      },
      { type: 'h2', text: 'How to use this' },
      {
        type: 'ul',
        items: [
          'Chasing a specific fish? Book inside its peak window.',
          'Flexible on species? Late August to October has the most options on the water at once.',
          'Bringing kids? Coho and shad are the most forgiving.',
        ],
      },
      {
        type: 'p',
        text: 'Seasons and limits change every year, so call before you lock in dates. Ryan will tell you what is open and what is running.',
      },
    ],
  },
  {
    slug: 'what-to-expect-on-a-guided-fishing-trip',
    title: 'What to Expect on a Guided Fishing Trip',
    excerpt:
      'First time on a guide boat? Here is how the day runs, from the ramp at sunrise to a cleaned, bagged catch at the end.',
    category: 'Trip Prep',
    date: '2026-10-20',
    readMins: 4,
    image: '/20240831_124653-1488x1536.webp',
    imageAlt: 'Family showing off their catch on a guided trip',
    body: [
      {
        type: 'p',
        text: 'A guided trip is built so you can show up with nothing and still have a great day. The boat, the gear and the know-how are all covered. Your job is to be on time and ready to have fun.',
      },
      { type: 'h2', text: 'Before the trip' },
      {
        type: 'p',
        text: 'Ryan confirms the river and launch time a day or two ahead, based on water conditions and where fish are moving. You will get the meeting spot and a short list of what to wear.',
      },
      { type: 'h2', text: 'On the water' },
      {
        type: 'ul',
        items: [
          'Meet at the ramp, usually early. The bite is often best around first light.',
          'Rods, tackle and bait are aboard and set up for the day.',
          'Ryan handles the driving and the positioning. You focus on the rod.',
          'Beginners get coaching on the spot, and nobody is expected to know anything.',
        ],
      },
      { type: 'h2', text: 'After the bite' },
      {
        type: 'p',
        text: 'Keepers are filleted, cleaned and packed so you can head home with dinner ready for the cooler. Bring a cooler and ice if you plan to travel far.',
      },
      { type: 'h2', text: 'What to bring' },
      {
        type: 'ul',
        items: [
          'Layers. River mornings run cold even in summer.',
          'Polarized sunglasses and a hat.',
          'Non-slip shoes with soft soles.',
          'Snacks, water and a cooler for your fish.',
          'Your fishing license if one is required for your trip. Ask when you book.',
        ],
      },
    ],
  },
  {
    slug: 'winter-steelhead-on-oregon-rivers',
    title: 'Winter Steelhead: Why Anglers Wait All Year',
    excerpt:
      'Steelhead are fast, powerful and hard to find. That is exactly why a day on quiet winter water with the right guide is worth the cold.',
    category: 'Steelhead',
    date: '2026-10-15',
    readMins: 4,
    image: '/wintersteelhead.webp',
    imageAlt: 'Winter steelhead held at the water line on an Oregon river',
    body: [
      {
        type: 'p',
        text: 'Steelhead are sea-run rainbow trout, and many anglers rank them as the hardest-fighting fish pound for pound on the river. They are also the fish that teaches patience.',
      },
      { type: 'h2', text: 'Why they are different' },
      {
        type: 'p',
        text: 'A steelhead trip is rarely about numbers. Water is usually quiet, the setting is beautiful, and one good take makes the whole day. The challenge is part of the appeal.',
      },
      { type: 'h2', text: 'Tackle: fly or light gear' },
      {
        type: 'p',
        text: 'Steelhead take both fly and light tackle, and a guide who runs a drift boat can match the method to the water. If you want to try fly fishing for the first time, a guided day is the easiest way in.',
      },
      { type: 'h2', text: 'Why a guide matters' },
      {
        type: 'ul',
        items: [
          'River height and clarity change daily, and so does where fish hold.',
          'The right run at the wrong flow produces nothing.',
          'Handling the fish well keeps it healthy if it is released.',
        ],
      },
      {
        type: 'p',
        text: 'Dress warm, bring a thermos and expect to work for it. For the right angler, that is the best part.',
      },
    ],
  },
  {
    slug: 'columbia-river-sturgeon-fishing',
    title: 'Columbia River Sturgeon: The Heaviest Pull in the River',
    excerpt:
      'Prehistoric, powerful and surprisingly accessible. What a sturgeon trip feels like, and how to set expectations for your dates.',
    category: 'Sturgeon',
    date: '2026-10-10',
    readMins: 4,
    image: '/sturgeon.webp',
    imageAlt: 'Large sturgeon beside the boat on the Columbia River',
    body: [
      {
        type: 'p',
        text: 'Nothing else on the Columbia comes close. Hooking a big sturgeon is less like catching a fish and more like arguing with the river bed.',
      },
      { type: 'h2', text: 'What the day looks like' },
      {
        type: 'ul',
        items: [
          'Anchor up on a productive stretch of river.',
          'Set heavy rods and wait. Sturgeon fishing rewards patience.',
          'When the rod loads, the whole boat gets involved.',
          'Photos, then a careful release.',
        ],
      },
      { type: 'h2', text: 'No skill barrier' },
      {
        type: 'p',
        text: 'You do not need experience. The gear is heavy and the guide handles the hard parts. Kids and first-timers regularly land fish that surprise everyone aboard.',
      },
      { type: 'h2', text: 'Retention rules' },
      {
        type: 'p',
        text: 'Sturgeon retention is tightly controlled and set by the state each season, so most sturgeon fishing is catch and release. Ask when you book and Ryan will tell you exactly what applies to your dates.',
      },
    ],
  },
  {
    slug: 'dungeness-crabbing-with-your-family',
    title: 'Dungeness Crabbing: A Coast Day the Whole Family Can Share',
    excerpt:
      'Pots in, sort the catch, fill the cooler. Why crab trips are one of the easiest and most rewarding days on the Oregon coast.',
    category: 'Crabbing',
    date: '2026-10-05',
    readMins: 3,
    image: '/crabtrip.webp',
    imageAlt: 'Dungeness crab pulled aboard on an Oregon coast crab trip',
    body: [
      {
        type: 'p',
        text: 'Crabbing is the rare trip where everyone, from grandparents to young kids, has a real job on the boat. It is hands-on, quick to learn and ends with dinner.',
      },
      { type: 'h2', text: 'How a crab trip works' },
      {
        type: 'ul',
        items: [
          'Set the pots in productive water.',
          'Pull them up and sort the catch. Only legal-size keepers stay.',
          'Reset, repeat and fill the cooler.',
        ],
      },
      { type: 'h2', text: 'Nothing to bring' },
      {
        type: 'p',
        text: 'Pots, bait and gear are all aboard. Wear layers and shoes that can get wet. Bring a cooler for the ride home.',
      },
      {
        type: 'p',
        text: 'Crabbing rules and conditions are set by the state and can change quickly, so ask when you book.',
      },
    ],
  },
  {
    slug: 'american-shad-run-on-the-columbia',
    title: 'The American Shad Run: Fast Fishing for Every Age',
    excerpt:
      'Warm weather, nonstop action and nothing to learn. Why the shad run is the easiest way to get a kid hooked on fishing.',
    category: 'Trip Prep',
    date: '2026-09-28',
    readMins: 3,
    image: '/americanshad.webp',
    imageAlt: 'American shad caught on the Columbia River',
    body: [
      {
        type: 'p',
        text: 'When the shad arrive, the fishing is fast. They school up in numbers, hit light gear and fight far harder than their size suggests.',
      },
      { type: 'h2', text: 'Why it works for families' },
      {
        type: 'ul',
        items: [
          'Volume fishing keeps kids engaged and rods bending.',
          'There is nothing complicated to learn.',
          'It runs in warm weather, so the day is comfortable.',
        ],
      },
      { type: 'h2', text: 'The plan' },
      {
        type: 'p',
        text: 'Meet at the ramp, find the school, and fish until the bites slow. It is a short, easy outing that gets younger anglers excited for the bigger trips later in the year.',
      },
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
