"use client";

import { useLocale } from "@/lib/locale-store";
import { AboutHero } from "@/components/sections/about/Hero";
import { CompanyStory } from "@/components/sections/about/CompanyStory";
import { MissionValues } from "@/components/sections/about/MissionValues";
import { Timeline } from "@/components/sections/about/Timeline";
import { TeamHighlights } from "@/components/sections/about/TeamHighlights";
import { BottomCTA } from "@/components/sections/about/BottomCTA";

export default function AboutPage() {
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero locale={locale} />
      <CompanyStory locale={locale} />
      <MissionValues locale={locale} />
      <Timeline locale={locale} />
      <TeamHighlights locale={locale} />
      <BottomCTA locale={locale} />
    </div>
  );
}
