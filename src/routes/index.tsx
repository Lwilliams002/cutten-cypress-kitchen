import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBoil from "@/assets/breakfastbowl.jpg";
import cornbread from "@/assets/cornbread.jpg";
import frenchToast from "@/assets/frenchtoastslider.jpg";
import chickenFried from "@/assets/chickenfriedsteak.jpg";
import poboy from "@/assets/poboy.jpg";
import logo from "@/assets/logo.png";
import crabRice from "@/assets/crab-rice.jpg";
import heroBoil2 from "@/assets/hero-boil.jpg";
import shrimp from "@/assets/shrimp.jpg";
import wings from "@/assets/wings.jpg";

const ORDER_URL = "https://online.skytab.com/cb090f40924f4f569007e5b0343a45a7";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cutten Kitchen — Authentic American Western Restaurant" },
      {
        name: "description",
        content:
          "Cutten Kitchen serves authentic American Western classics — Chicken Fried Chicken, grilled Meatloaf, Jerk Lamb Chops and Southern brunch — now in North Cypress, TX.",
      },
      { property: "og:title", content: "Cutten Kitchen — North Cypress, TX" },
      {
        property: "og:description",
        content: "Authentic American Western restaurant. Chicken fried classics, brunch all day.",
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
      <Tagline />
      <ThreeCards />
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
    "Authentic American Western",
    "Chicken fried classics",
    "Brunch served all day",
    "Family owned · Houston born",
    "Now serving North Cypress, TX",
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
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/90 border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 grid grid-cols-2 md:grid-cols-3 items-center">
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em]">
          <a href={ORDER_URL} target="_blank" rel="noreferrer" className="text-ember hover:text-ember-deep">
            Order Online
          </a>
          <a href="#menu" className="hover:text-ember transition-colors">Menu</a>
          <a href="#visit" className="hover:text-ember transition-colors">Visit</a>
        </nav>
        <a href="#top" className="flex items-center justify-self-start md:justify-self-center gap-2">
          <img src={logo} alt="Cutten Kitchen" className="h-10 md:h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 justify-self-end text-xs font-semibold uppercase tracking-[0.22em]">
          <a href="#about" className="hover:text-ember transition-colors">Story</a>
          <a href="#catering" className="hover:text-ember transition-colors">Catering</a>
          <a href="#visit" className="hover:text-ember transition-colors">Contact</a>
        </nav>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noreferrer"
          className="md:hidden justify-self-end bg-ember text-primary-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em]"
        >
          Order
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[78vh] min-h-[560px] md:h-[88vh] overflow-hidden">
        <img
          src={heroBoil}
          alt="Cutten Kitchen breakfast bowl"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

        <div className="relative h-full mx-auto max-w-5xl px-6 flex flex-col items-center justify-center text-center text-cream reveal">
          <div className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-cream/80 mb-6">
            ✦ Est. Houston · North Cypress, TX ✦
          </div>
          <h1 className="font-display uppercase leading-[0.85] text-[20vw] md:text-[10rem]">
            Cutten Kitchen
          </h1>
          <div className="mt-5 h-[3px] w-24 bg-ember" />
          <p className="mt-5 font-serif italic text-lg md:text-2xl text-cream/90 max-w-2xl">
            Authentic American Western Restaurant
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-ember text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] hover:bg-ember-deep transition-colors shadow-[var(--shadow-ember)]"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="border border-cream/70 text-cream px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] hover:bg-cream hover:text-ink transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tagline() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
        <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.95]">
          Authentic American <br className="hidden md:block" />
          <span className="text-ember">Western</span> Restaurant
        </h2>
        <div className="mx-auto mt-6 h-[3px] w-20 bg-ember" />
        <p className="mt-8 font-serif text-lg md:text-xl leading-relaxed text-smoke">
          American Western cuisine serving classic dishes like Chicken Fried Chicken,
          grilled Meatloaf and Jerk Lamb Chops. Our signature Blueberry Lemon Drop and
          Island Tings are the perfect pairing to any entrée — and we've got a kids menu,
          highchairs, and outdoor seating for you and your pets.
        </p>
      </div>
    </section>
  );
}

const cards = [
  {
    k: "Order Online",
    img: cornbread,
    desc: "Craving Cutten? Order now for pickup or delivery and enjoy our Southern classics from home.",
    cta: "Order Now",
    href: ORDER_URL,
    external: true,
    id: "order",
  },
  {
    k: "Catering",
    img: frenchToast,
    desc: "Planning an event? Let us cater your party, corporate gathering, or special occasion.",
    cta: "Learn More",
    href: "#visit",
    external: false,
    id: "catering",
  },
  {
    k: "Contact Us",
    img: chickenFried,
    desc: "Questions or want to reach out? We'd love to hear from you — get in touch any time.",
    cta: "Get in Touch",
    href: "#visit",
    external: false,
    id: "contact",
  },
];

function ThreeCards() {
  return (
    <section className="bg-cream-deep border-y border-ink/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((c) => (
          <article
            id={c.id}
            key={c.k}
            className="bg-card border border-ink/10 overflow-hidden shadow-[var(--shadow-paper)] flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img src={c.img} alt={c.k} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-7 md:p-8 text-center flex-1 flex flex-col">
              <h3 className="font-display uppercase text-3xl">{c.k}</h3>
              <div className="mx-auto mt-3 h-[2px] w-12 bg-ember" />
              <p className="mt-5 text-smoke leading-relaxed flex-1">{c.desc}</p>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mt-7 inline-block border-2 border-ember text-ember px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-ember hover:text-primary-foreground transition-colors"
              >
                {c.cta}
              </a>
            </div>
          </article>
        ))}
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
    price: "$3",
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
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.28em] text-ember mb-3">01 — Signatures</div>
        <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9]">
          Plates worth the drive.
        </h2>
        <div className="mx-auto mt-5 h-[3px] w-20 bg-ember" />
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
            alt="Cutten Kitchen handheld plate"
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
            Cutten Kitchen started as a neighborhood spot in Houston — built on slow recipes,
            Western classics, and the kind of seasoning your grandmother would nod at. We're
            bringing that same flame north to Cypress: bigger plates, crispier crusts, and a room
            that feels like a Sunday with family.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-xl">
            {[
              ["Sourced", "Fresh, local, daily"],
              ["Seasoned", "House Western blend"],
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
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.28em] text-ember mb-3">03 — The menu</div>
        <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9]">
          What's <span className="text-ember">cooking.</span>
        </h2>
        <div className="mx-auto mt-5 h-[3px] w-20 bg-ember" />
        <p className="mt-6 max-w-xl mx-auto text-smoke">
          A taste of the line. Menu rotates with the season — ask your server about tonight's chef specials.
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


const GALLERY_IMAGES = [
  { src: heroBoil, alt: "Breakfast Bowl" },
  { src: cornbread, alt: "Cornbread" },
  { src: frenchToast, alt: "French Toast Sliders" },
  { src: chickenFried, alt: "Chicken Fried Steak" },
  { src: poboy, alt: "Po'Boy" },
  { src: crabRice, alt: "Crab Rice" },
  { src: heroBoil2, alt: "House Bowl" },
  { src: shrimp, alt: "Shrimp" },
  { src: wings, alt: "Wings" },
];

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=6935+Farm+to+Market+1960+Rd+W,+Houston,+TX+77069";

function Visit() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((i) => (i === null ? null : i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
  const nextImage = () =>
    setLightbox((i) => (i === null ? null : i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));

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
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-ember text-primary-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-ember-deep transition-colors"
            >
              Order Online
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-ink/30 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="md:col-span-6 grid sm:grid-cols-2 gap-5">
          {[
            { k: "Address", v: ["6935 FM 1960 Rd W", "Houston, TX 77069"] },
            { k: "Phone", v: ["(281) 836-5558"] },
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

      {/* Photo Gallery */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-28">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.28em] text-ember mb-2">Gallery</div>
          <h3 className="font-display uppercase text-3xl md:text-4xl">A look inside the kitchen.</h3>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-ember" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden bg-muted group cursor-pointer border border-ink/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-28">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.28em] text-ember mb-2">Find us</div>
          <h3 className="font-display uppercase text-3xl md:text-4xl">Get here hungry.</h3>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-ember" />
        </div>
        <div className="border border-ink/10 shadow-[var(--shadow-paper)] overflow-hidden">
          <iframe
            title="Cutten Kitchen Location"
            src="https://maps.google.com/maps?q=6935+Farm+to+Market+1960+Rd+W,Houston,TX+77069&hl=en&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-cream/70 hover:text-cream text-2xl font-light"
            aria-label="Close gallery"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-cream/70 hover:text-cream text-3xl font-light"
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={GALLERY_IMAGES[lightbox].src}
            alt={GALLERY_IMAGES[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-cream/70 hover:text-cream text-3xl font-light"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cream/70 text-sm tracking-widest uppercase">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
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
            <p className="mt-3 font-serif italic">Authentic American Western · North Cypress, TX</p>
          </div>
          <div className="text-xs uppercase tracking-[0.25em] space-y-1.5">
            <a href="#menu" className="block hover:text-ember">Menu</a>
            <a href="#about" className="block hover:text-ember">Story</a>
            <a href="#visit" className="block hover:text-ember">Visit</a>
            <a href={ORDER_URL} target="_blank" rel="noreferrer" className="block hover:text-ember">
              Order Online
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
