"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

const topics = ["iron", "zinc", "probiotics", "immunity"] as const;

const resources: Record<string, Array<{ title: string; description: string; badge: string }>> = {
  iron: [
    {
      title: "Төмрийн дутал - Шалтгаан, шинж тэмдэг",
      description: "Төмрийн дуталын шалтгаан, шинж тэмдэг, оношлогооны талаарх мэдээлэл",
      badge: "Төмөр",
    },
    {
      title: "Төмрийн дуталын эмчилгээ",
      description: "Төмрийн дуталыг эмчлэх арга замууд, эмчилгээний хэлбэрүүд",
      badge: "Эмчилгээ",
    },
  ],
  zinc: [
    {
      title: "Цайрын ач холбогдол",
      description: "Цайр хүүхдийн эрүүл мэндэд үзүүлэх нөлөө, ач холбогдол",
      badge: "Цайр",
    },
    {
      title: "Цайрын дутал ба эмчилгээ",
      description: "Цайрын дуталын шинж тэмдэг, эмчилгээний арга",
      badge: "Эмчилгээ",
    },
  ],
  probiotics: [
    {
      title: "Пробиотикийн ашиг тус",
      description: "Пробиотик хүүхдийн хоол боловсруулалт, дархлаанд үзүүлэх нөлөө",
      badge: "Пробиотик",
    },
    {
      title: "Пробиотикийн хэрэглээ",
      description: "Пробиотикийг хэрхэн зөв хэрэглэх, хэзээ хэрэглэх вэ",
      badge: "Хэрэглээ",
    },
  ],
  immunity: [
    {
      title: "Хүүхдийн дархлааны систем",
      description: "Хүүхдийн дархлааны системийн хөгжил, хамгаалах механизм",
      badge: "Дархлаа",
    },
    {
      title: "Дархлааг бэхжүүлэх арга",
      description: "Хүүхдийн дархлааг бэхжүүлэх байгалийн арга замууд",
      badge: "Эрүүл мэнд",
    },
  ],
};

const resourcesEn: Record<string, Array<{ title: string; description: string; badge: string }>> = {
  iron: [
    {
      title: "Iron Deficiency - Causes and Symptoms",
      description: "Information about causes, symptoms, and diagnosis of iron deficiency",
      badge: "Iron",
    },
    {
      title: "Iron Deficiency Treatment",
      description: "Methods and forms of treatment for iron deficiency",
      badge: "Treatment",
    },
  ],
  zinc: [
    {
      title: "Importance of Zinc",
      description: "The impact and importance of zinc on children's health",
      badge: "Zinc",
    },
    {
      title: "Zinc Deficiency and Treatment",
      description: "Symptoms and treatment methods for zinc deficiency",
      badge: "Treatment",
    },
  ],
  probiotics: [
    {
      title: "Benefits of Probiotics",
      description: "Impact of probiotics on children's digestion and immunity",
      badge: "Probiotics",
    },
    {
      title: "Probiotic Usage",
      description: "How and when to properly use probiotics",
      badge: "Usage",
    },
  ],
  immunity: [
    {
      title: "Children's Immune System",
      description: "Development and protective mechanisms of children's immune system",
      badge: "Immunity",
    },
    {
      title: "Ways to Strengthen Immunity",
      description: "Natural ways to strengthen children's immunity",
      badge: "Health",
    },
  ],
};

export function EducationTabs({ locale }: { locale: Locale }) {
  const resourceData = locale === "mn" ? resources : resourcesEn;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <Tabs defaultValue="iron" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {topics.map((topic) => (
              <TabsTrigger key={topic} value={topic}>
                {t(`educationPage.tabs.${topic}`, locale)}
              </TabsTrigger>
            ))}
          </TabsList>
          {topics.map((topic) => (
            <TabsContent key={topic} value={topic} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourceData[topic]?.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="flex-1">{resource.title}</CardTitle>
                        <Badge variant="outline">{resource.badge}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        {t("educationPage.resources.learnMore", locale)}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
