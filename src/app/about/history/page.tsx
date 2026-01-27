"use client";

import * as React from "react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: "2016",
    title: "Founded",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    year: "2018",
    title: "First Product Line",
    description:
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
  },
  {
    year: "2020",
    title: "Quality Expansion",
    description:
      "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.",
  },
  {
    year: "2022",
    title: "National Reach",
    description:
      "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
  },
  {
    year: "2025",
    title: "Next Chapter",
    description:
      "In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
  },
];

function ImagePlaceholder({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="group relative h-56 w-full overflow-hidden rounded-3xl border-2 border-dashed border-primary/30 bg-muted/40">
      <div className="flex h-full w-full items-center justify-center text-sm font-medium text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">
        {label}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/80 px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm leading-6 text-background">{description}</p>
      </div>
    </div>
  );
}

export default function AboutHistoryPage() {
  return (
    <main className="relative overflow-x-hidden bg-background pb-24 pt-28 text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <section className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
            Our Journey
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Company History Roadmap
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A vertical, zigzag timeline that highlights key milestones. Image
            slots are outlined so you can drop in visuals later.
          </p>
        </section>

        <section aria-label="Company history timeline" className="relative">
          <ol className="relative flex flex-col gap-14 md:gap-16">
            {TIMELINE.map((item, index) => {
              const isLeft = index % 2 === 0;
              const sideRow = isLeft ? "md:flex-row" : "md:flex-row-reverse";
              const align = isLeft ? "md:text-right" : "md:text-left";
              const connector = isLeft
                ? "left-1/2 w-56 -translate-x-full"
                : "left-1/2 w-56";

              return (
                <li
                  key={`${item.year}-${item.title}`}
                  className="relative md:py-6"
                >
                  <div
                    className={`pointer-events-none absolute top-1/2 hidden h-0.5 -translate-y-1/2 bg-primary/60 md:block ${connector}`}
                  />
                  <div
                    className={`relative z-10 flex flex-col items-center gap-6 md:gap-8 ${sideRow}`}
                  >
                    <article
                      className={`relative mx-auto w-full max-w-sm rounded-3xl border border-border/70 bg-card/80 p-6 text-center shadow-sm backdrop-blur md:flex md:h-56 md:w-56 md:shrink-0 md:flex-col md:items-center md:justify-center md:gap-2 md:rounded-full md:p-6 md:!text-center ${align}`}
                    >
                      <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary md:mb-1">
                        {item.year}
                      </div>
                      <h2 className="text-2xl font-semibold tracking-tight md:text-xl">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-muted-foreground md:hidden">
                        {item.description}
                      </p>
                    </article>

                    <div className="mx-auto w-full max-w-sm md:flex md:w-[calc(50%-3rem)] md:max-w-[28rem] md:items-center md:justify-center">
                      <ImagePlaceholder
                        label="Image Placeholder"
                        description={item.description}
                      />
                    </div>
                  </div>

                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-primary shadow-[0_0_0_8px_rgba(59,130,246,0.25)] md:block" />
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}
