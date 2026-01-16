"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/locale-store";

export function InquiryForm({ locale }: { locale: Locale }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>{t("partners.inquiry.title", locale)}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    {t("partners.inquiry.name", locale)}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium mb-2 block">
                    {t("partners.inquiry.company", locale)}
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    {t("partners.inquiry.email", locale)}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    {t("partners.inquiry.phone", locale)}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  {t("partners.inquiry.message", locale)}
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              {status === "success" && (
                <Alert>
                  <AlertDescription>
                    {locale === "mn" ? "Амжилттай илгээгдлээ" : "Inquiry sent successfully"}
                  </AlertDescription>
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {locale === "mn" ? "Алдаа гарлаа" : "An error occurred"}
                  </AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                {t("partners.inquiry.submit", locale)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
