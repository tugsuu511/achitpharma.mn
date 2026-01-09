"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function EducationSection({ locale }: { locale: Locale }) {
  const articles = [
    { title: t("education.article1", locale) },
    { title: t("education.article2", locale) },
    { title: t("education.article3", locale) },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("education.title", locale)}</h2>
            <p className="text-muted-foreground">
              {locale === "mn" ? "Хүүхдийн эрүүл мэндийн талаар мэдээлэл" : "Information about children's health"}
            </p>
          </div>

          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/education">
              {t("education.seeAll", locale)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>

              <CardFooter>
                <Link href="/education" className="text-sm text-primary hover:underline flex items-center">
                  {locale === "mn" ? "Унших" : "Read more"}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
