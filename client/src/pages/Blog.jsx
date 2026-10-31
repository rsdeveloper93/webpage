import React from "react";

const articles = [
  {
    title: "The Future of Web Development in 2025",
    date: "Apr 22, 2025",
    img: "photo-1498050108023-c5249f4df085",
  },
  {
    title: "Top 10 Mobile App Trends in 2025",
    date: "Apr 10, 2025",
    img: "photo-1512941937669-90a1b58e7e9c",
  },
  {
    title: "Digital Marketing Strategies for Small Businesses",
    date: "Apr 12, 2025",
    img: "photo-1460925895917-afdab827c52f",
  },
  {
    title: "Cloud Computing: Benefits and Future",
    date: "Apr 08, 2025",
    img: "photo-1451187580459-43490279c0fa",
  },
];

const imgUrl = (id, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Blog() {
  const revealClass =
    "reveal-on-scroll opacity-1 translate-y-0 transition-all duration-700 ease-out motion-reduce:transition-none";

  return (
    <section id="blog" className="bg-gradient-to-r from-[#fafafa] to-[#fff4ec] min-h-screen !pt-2">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className={revealClass}>
          <p className="eyebrow">Our Blog</p>

          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Latest News & Articles
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Stay updated with the latest trends in technology and digital
            marketing.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <article
              key={a.title}
              className={`overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${revealClass}`}
            >
              <div className="overflow-hidden">
                <img
                  className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transform-none"
                  src={imgUrl(a.img, 600)}
                  alt={a.title}
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h2 className="text-sm font-extrabold leading-5">
                  {a.title}
                </h2>

                <div className="mt-4 flex items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span>{a.date}</span>

                  <a
                    href="#contact"
                    className="cursor-pointer font-bold text-orange transition-colors duration-300 hover:text-orange-700"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;