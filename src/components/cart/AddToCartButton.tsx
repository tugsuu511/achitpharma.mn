"use client";

import * as React from "react";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { parseMnt } from "@/lib/money";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: string;
    imageSrc?: string;
    requiresPrescription?: boolean;
  };
  onPrescriptionAttempt?: () => void;
};

export function AddToCartButton({ product, onPrescriptionAttempt }: AddToCartButtonProps) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent parent Link wrappers from navigating when adding to cart.
    e.preventDefault();
    e.stopPropagation();

    add({
      productId: product.id,
      name: product.name,
      unitPrice: parseMnt(product.price),
      imageSrc: product.imageSrc,
    });

    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  };

  const isLocked = Boolean(product.requiresPrescription);

  return (
    <Button
      type="button"
      onClick={(e) => {
        if (isLocked) {
          e.preventDefault();
          e.stopPropagation();
          onPrescriptionAttempt?.();
          return;
        }
        handleClick(e);
      }}
      className={`gap-2 ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
      aria-disabled={isLocked}
    >
      <ShoppingCart className="h-4 w-4" />
      {isLocked ? "Жороор олгох" : added ? "Нэмэгдлээ" : "Сагслах"}
    </Button>
  );
}
