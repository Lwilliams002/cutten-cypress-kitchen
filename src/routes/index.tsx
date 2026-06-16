import { createFileRoute } from "@tanstack/react-router";
import breakfastBowlAsset from "@/assets/breakfast-bowl.jpg.asset.json";
const heroBoil = breakfastBowlAsset.url;
import cornbreadAsset from "@/assets/cornbread.jpg.asset.json";
import frenchToastAsset from "@/assets/french-toast-sliders-v2.jpeg.asset.json";
import chickenFriedAsset from "@/assets/chicken-fried-steak-v2.jpeg.asset.json";
import poboy from "@/assets/poboy.jpg";
import logo from "@/assets/logo.png";
const cornbread = cornbreadAsset.url;
const frenchToast = frenchToastAsset.url;
const chickenFried = chickenFriedAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cutten Kitchen — Cajun Seafood Boils in North Cypress, TX" },
      {
        name: "description",
        content:
          "Cutten Kitchen brings bold Houston-born Cajun seafood boils, fried wings, and Southern comfort to North Cypress, Texas. Order pickup, delivery, or dine in.",
      },
      { property: "og:title", content: "Cutten Kitchen — North Cypress, TX" },
      {
        property: "og:description",
        content: "Cajun seafood boils, wings, and Southern comfort food.",
      },
      { property: "og:image", content: heroBoil },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBoil },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Marquee />
      <Nav />
      <Hero />
      <Signatures />
      <About />
      <Menu />
      <Visit />
      <Footer />
    </div>
  );
}

function Marquee() {
  const items = [
    "Cajun seafood boils",
    "Slow-smoked wings",
    "Now serving North Cypress",
    "Family owned · Houston born",
    "Pickup · Delivery · Dine in",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-b border-ink/15 bg-ink text-cream">
      <div className="flex whitespace-nowrap ticker py-2.5 text-[11px] font-medium tracking-[0.25em] uppercase">
        {row.map((t, i) => (
          <span key={i} className="px-6 flex items-center gap-6">
            {t}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/85 border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Cutten Kitchen" className="h-9 md:h-11 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium uppercase tracking-[0.18em]">
          <a href="#menu" className="hover:text-ember transition-colors">
            Menu
          </a>
          <a href="#about" className="hover:text-ember transition-colors">
            Story
          </a>
          <a href="#visit" className="hover:text-ember transition-colors">
            Visit
          </a>
        </nav>
        <a
          href="https://online.skytab.com/cb090f40924f4f569007e5b0343a45a7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-ember text-primary-foreground px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] hover:bg-ember-deep transition-colors"
        >
          Order online
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.28em] text-smoke">
              <span className="h-px w-10 bg-ink/40" />
              Now serving North Cypress, TX
            </div>
            <h1 className="font-display uppercase leading-[0.85] text-[18vw] md:text-[10.5rem]">
              Boiled
              <span className="block text-ember">Buttered.</span>
              <span className="block text-stroke">Blazed.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg font-serif italic text-smoke">
              Houston-born Cajun seafood, slow-smoked wings, and Southern comfort — now firing up
              plates north of Cypress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://online.skytab.com/cb090f40924f4f569007e5b0343a45a7"
                target="_blank"
                rel="noreferrer"
                className="bg-ember text-primary-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-ember-deep transition-colors shadow-[var(--shadow-ember)]"
              >
                Order online
              </a>
              <a
                href="#menu"
                className="border border-ink/30 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors"
              >
                See the menu
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroBoil}
                alt="Cajun seafood boil with snow crab, shrimp, corn and potatoes"
                width={1600}
                height={2000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-ink/10" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-6 bg-cream border border-ink/15 px-4 py-3 shadow-[var(--shadow-paper)]">
              <div className="text-[10px] uppercase tracking-[0.25em] text-smoke">
                House favorite
              </div>
              <div className="font-display text-2xl">Breakfast Bowl</div>
            </div>
          </div>
        </div>
      </div>

      {/* Strip stats */}
      <div className="border-y border-ink/15 bg-cream-deep">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10">
          {[
            ["Est.", "Houston"],
            ["Style", "Cajun · Southern"],
            ["Hours", "Tue–Sun · 11–10"],
            ["Area", "North Cypress, TX"],
          ].map(([k, v]) => (
            <div key={k} className="py-5 md:py-7 px-4 md:px-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-smoke">{k}</div>
              <div className="mt-1 font-display text-xl md:text-2xl">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const dishes = [
  {
    name: "Breakfast Bowl",
    desc: "Breakfast potatoes, eggs, shredded cheese, bacon bits & chopped fried chicken — finished with microgreens.",
    price: "$22",
    img: heroBoil,
    tag: "Signature",
  },
  {
    name: "Cornbread",
    desc: "Golden, butter-glazed skillet cornbread — sweet, crisp edges, tender middle. House staple.",
    price: "$8",
    img: cornbread,
    tag: "Bestseller",
  },
  {
    name: "French Toast Sliders",
    desc: "Eggs, shredded cheese, fried chicken & bacon stacked on griddled French toast with maple syrup.",
    price: "$25",
    img: frenchToast,
    tag: "Brunch favorite",
  },
  {
    name: "Chicken Fried Steak",
    desc: "Creamy country gravy, mashed potatoes & Jackie's greens. A Southern Sunday on a plate.",
    price: "$24",
    img: chickenFried,
    tag: "Popular",
  },
];

function Signatures() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-ember mb-3">01 — Signatures</div>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9]">
            Plates worth <br /> the drive.
          </h2>
        </div>
        <a
          href="#menu"
          className="hidden md:inline text-sm font-semibold uppercase tracking-[0.2em] underline underline-offset-[6px] decoration-ember hover:text-ember"
        >
          Full menu →
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {dishes.map((d, i) => (
          <article
            key={d.name}
            className="group bg-card border border-ink/10 overflow-hidden hover:shadow-[var(--shadow-paper)] transition-shadow"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-cream/95 text-ink text-[10px] uppercase tracking-[0.22em] px-2.5 py-1">
                {d.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <span className="font-serif italic text-ember">{d.price}</span>
              </div>
              <p className="mt-2 text-sm text-smoke leading-relaxed">{d.desc}</p>
              <div className="mt-4 text-[10px] uppercase tracking-[0.28em] text-smoke">
                {String(i + 1).padStart(2, "0")} · Cutten Kitchen
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-14 relative">
        <div className="md:col-span-5">
          <img
            src={poboy}
            alt="Shrimp po-boy with Cajun fries"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.28em] text-ember mb-4">02 — Our story</div>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9]">
            From a Houston <br />
            <span className="text-ember">kitchen</span> to your <br /> Cypress table.
          </h2>
          <p className="mt-8 font-serif text-lg md:text-xl leading-relaxed text-cream/85 max-w-2xl">
            Cutten Kitchen started as a neighborhood spot in Houston — built on slow recipes, gulf
            seafood, and the kind of seasoning your grandmother would nod at. We're bringing that
            same flame north to Cypress: bigger boils, crispier wings, and a room that feels like a
            Sunday with family.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-xl">
            {[
              ["Sourced", "Gulf seafood, daily"],
              ["Seasoned", "House Cajun blend"],
              ["Served", "Hot, generous, honest"],
              ["Built for", "Families & big tables"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-cream/20 pt-4">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-cream/60">{k}</dt>
                <dd className="font-display text-xl mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const menu = {
  Starters: [
    ["Chicken Bites", "Fried chicken served with our signature sauce", "16"],
    ["Salmon Bites", "Crispy salmon bites with house-made aioli", "17"],
    ["Egg Rolls", "Chicken, black beans, corn & Southwestern spice", "14"],
    ["Chips and Queso", "Creamy homemade queso with fresh chips", "11"],
    ["Deviled Eggs", "Farm-fresh, whipped to perfection, Sriracha", "11"],
    ["Spinach Dip", "Spinach, artichokes & melted cheeses, baked", "13"],
    ["6 Wings", "Tossed in your choice of sauce", "13"],
    ["10 Wings", "Tossed in your choice of sauce", "19"],
  ],
  Salads: [
    ["House Salad", "Chopped greens, tomato, cucumber, choice of dressing", "10"],
    ["SW Salad", "Blackened chicken, corn, black beans, tortilla strips, SW dressing", "23"],
    ["Cobb", "Chicken tenders, tomato, bacon, blue cheese, eggs, honey mustard", "23"],
    ["Caesar", "Romaine, parmesan, cornbread croutons", "19"],
  ],
  "Handhelds (with Fries)": [
    ["Beef Sliders", "Spring mix, tomato, bacon, pepper jack, aioli", "22"],
    ["Chicken Sliders", "Spring mix, tomato, bacon, pepper jack, aioli", "22"],
    ["Grilled Sandwich", "Bacon, cheese, lettuce, tomato on Texas toast", "22"],
    ["Patty Melt", "Half pounder, Swiss, grilled onions, CK pub sauce", "22"],
    ["Po'Boy", "New Orleans classic — fried shrimp or catfish", "23"],
  ],
  Entrées: [
    ["Chicken Fried Steak", "Country gravy, mashed potatoes & Jackie's greens", "24"],
    ["Chicken Fried Chicken", "Country gravy, mashed potatoes & green beans", "24"],
    ["Ribeye", "14oz USDA Prime, choice of two sides", "51"],
    ["Lamb Chops", "Jamaican jerk-marinated, grilled to order", "48"],
    ["Grilled Chicken", "Blackened breast, potatoes & green beans", "26"],
    ["Fried Shrimp", "8 fried shrimp served over fries", "25"],
  ],
  "Brunch (All Day)": [
    ["Breakfast Bowl", "Potatoes, eggs, cheese, bacon bits, chopped fried chicken", "22"],
    ["Lamb Chops Breakfast", "4 jerk lamb chops, breakfast potatoes, eggs", "48"],
    ["Chicken & Waffle", "Crispy saucy wings, golden waffle, maple syrup", "23"],
    ["Fish & Grits", "Blackened catfish, grits", "24"],
    ["Shrimp & Grits", "6 blackened shrimp, grits", "26"],
    ["Fish & Grits Combo", "Blackened catfish and shrimp, grits", "28"],
    ["French Toast Sliders", "Eggs, cheese, fried chicken, bacon, maple syrup", "25"],
    ["Gold Rush Toast", "Traditional or cream-stuffed French toast", "15"],
    ["Chicken Fried Breakfast", "Chicken fried chicken or steak, potatoes & eggs", "25"],
  ],
  "Lunch Specials": [
    ["Lunch Deviled Eggs", "Whipped to perfection, Sriracha garnish", "5"],
    ["Lunch Egg Rolls", "Chicken, black beans, corn, Southwestern spice", "7"],
    ["Lunch Dip", "Spinach, artichoke & melted cheeses", "5"],
    ["Lunch Catfish", "Cornmeal crust with sides", "16"],
    ["Lunch Salmon", "Pan-seared salmon with sides", "18"],
    ["Lunch Hamburger", "8oz premium beef, toasted brioche bun", "16"],
    ["Lunch Lamb Chops", "Jamaican jerk-marinated, grilled", "19"],
    ["Lunch Wings & Fries", "Tossed in your choice of sauce", "15"],
    ["Lunch Po'Boy", "Fried shrimp or catfish, New Orleans style", "15"],
    ["Lunch Pork Chop", "Grilled or fried, herb & spice rubbed", "13"],
  ],
};

function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
      <div className="mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.28em] text-ember mb-3">03 — The menu</div>
        <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9]">
          What's <span className="text-ember">cooking.</span>
        </h2>
        <p className="mt-4 max-w-xl text-smoke">
          A taste of the line. Menu rotates with the catch — ask your server about tonight's chef
          specials.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 md:gap-14">
        {Object.entries(menu).map(([section, items]) => (
          <div key={section}>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-ember text-2xl">✦</span>
              <h3 className="font-display uppercase text-3xl">{section}</h3>
            </div>
            <ul className="space-y-5">
              {items.map(([name, desc, price]) => (
                <li key={name} className="border-b border-ink/10 pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{name}</span>
                    <span className="font-serif italic text-ember whitespace-nowrap">
                      {price === "MP" ? "MP" : `$${price}`}
                    </span>
                  </div>
                  <p className="text-sm text-smoke mt-1">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-cream-deep border-t border-ink/15">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <div className="text-xs uppercase tracking-[0.28em] text-ember mb-3">04 — Visit</div>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9]">
            Come hungry. <br /> Leave full.
          </h2>
          <p className="mt-6 text-smoke max-w-md">
            Pull up to our North Cypress kitchen, or have it brought hot to your door. Big parties
            welcome — call ahead and we'll set the table.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+12815550100"
              className="bg-ember text-primary-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-ember-deep transition-colors"
            >
              Call to order
            </a>
            <a
              href="https://www.google.com/maps/search/restaurants+north+cypress+tx"
              target="_blank"
              rel="noreferrer"
              className="border border-ink/30 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="md:col-span-6 grid sm:grid-cols-2 gap-5">
          {[
            { k: "Address", v: ["Cutten Kitchen", "North Cypress, TX 77433"] },
            { k: "Phone", v: ["(281) 555-0100"] },
            {
              k: "Hours",
              v: ["Tue – Thu · 11a – 9p", "Fri – Sat · 11a – 10p", "Sun · 12p – 8p"],
            },
            { k: "Follow", v: ["@cuttenkitchen"] },
          ].map((c) => (
            <div
              key={c.k}
              className="bg-card border border-ink/10 p-6 shadow-[var(--shadow-paper)]"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-smoke">{c.k}</div>
              <div className="mt-2 space-y-1">
                {c.v.map((line) => (
                  <div key={line} className="font-display text-xl leading-tight">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-display text-6xl md:text-8xl text-cream leading-none">
              CUTTEN<span className="text-ember">.</span>
            </div>
            <p className="mt-3 font-serif italic">Houston flavor, Cypress address.</p>
          </div>
          <div className="text-xs uppercase tracking-[0.25em] space-y-1.5">
            <a href="#menu" className="block hover:text-ember">
              Menu
            </a>
            <a href="#about" className="block hover:text-ember">
              Story
            </a>
            <a href="#visit" className="block hover:text-ember">
              Visit
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-cream/15 flex flex-wrap gap-4 justify-between text-[11px] uppercase tracking-[0.25em] text-cream/50">
          <span>© {new Date().getFullYear()} Cutten Kitchen</span>
          <span>North Cypress, Texas</span>
        </div>
      </div>
    </footer>
  );
}
