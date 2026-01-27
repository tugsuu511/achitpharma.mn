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
  };
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
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

  return (
    <Button type="button" onClick={handleClick} className="gap-2">
      <ShoppingCart className="h-4 w-4" />
      {added ? "Нэмэгдлээ" : "Сагслах"}
    </Button>
  );
}

