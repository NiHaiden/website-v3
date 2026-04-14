export default function CustomTimeline() {
  const items = [
    {
      year: "2017–2022",
      title: "HTBLUVA St. Pölten",
      description:
        "Vocational school in the heart of Lower Austria. Started with C and then moved onto Java and deepened our knowledge in this field. We also learned lots of interesting stuff about Linux, Web Development and also how to organize projects and deal with starting your own company. Kickstarted my passion for coding.",
    },
    {
      year: "2022–2023",
      title: "Mandatory service as EMT @ Samariterbund",
      description:
        "The 9 month mandatory service consisted of helping elderly patients get to their doctors appointments and back home, helping the main paramedics in their daily tasks in emergency medical services and various other organizational tasks.",
    },
    {
      year: "2024–today",
      title: "Software Engineer at Austrian Patent Office",
      titleLink: "https://patentamt.at",
      description:
        "Various duties include the development and deployment of internal tools to help around the organization in their tasks and developing a successor to the See-IP System where people can view trademarks and patents.",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto px-6 lg:px-0">
      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/30" />

        <div className="flex flex-col gap-8">
          {items.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute left-[-25px] top-1.5 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />

              {/* Card */}
              <div className="backdrop-blur-lg bg-black/20 border border-white/[0.15] rounded-2xl p-5 shadow-lg">
                <div className="text-sm font-bold text-sky-300 tracking-wide uppercase mb-1">
                  {item.year}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {item.titleLink ? (
                    <a
                      href={item.titleLink}
                      className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
                <div className="text-sm text-white/90 leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
