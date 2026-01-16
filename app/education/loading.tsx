import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Skeleton */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl text-center">
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[600px] mx-auto" />
        </div>
      </section>

      {/* Tabs Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Skeleton className="h-10 w-full mb-8 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Skeleton className="h-10 w-64 mx-auto mb-8" />
          <div className="w-full max-w-4xl mx-auto space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i}>
                <div className="p-6">
                  <Skeleton className="h-6 w-full mb-4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
