import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl text-center">
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[600px] mx-auto mb-8" />
          <Skeleton className="h-10 w-40 mx-auto" />
        </div>
      </section>

      {/* Benefits Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Skeleton className="h-10 w-64 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Skeleton className="h-10 w-48 mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <div className="p-6">
                  <Skeleton className="h-24 w-24 mx-auto rounded-lg" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Skeleton className="h-10 w-64 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <Card className="max-w-2xl mx-auto">
            <div className="p-6 space-y-4">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
