const projects = [
  {
    client: "Dazzle Inc.",
    title: "Dazzle © Branding",
    image: "/images/Pack.jpg",
  },
  {
    client: "CareSunset",
    title: "Healthcare Mobile App",
    image: "/images/healthcare-app.png",
  },
  {
    client: "Tech Bank Client",
    title: "Technical Infographic",
    image: "/images/tech-infographic.png",
  },
  {
    client: "Notex",
    title: "Extend & Support – App Plugin",
    image: "/images/app-plugin.png",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title}>
              <div className="rounded-[32px] bg-[#e4e7f0] p-6 md:p-10">
                <div className="relative flex aspect-[4/3] items-center justify-center rounded-2xl bg-neutral-900">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <span className="text-xs text-neutral-400">
                      {p.title} image
                    </span>
                  )}

                  <button className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm hover:bg-neutral-100">
                    ↗
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs text-neutral-500">{p.client}</p>
              <h3 className="mt-1 text-lg font-medium tracking-tight">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
