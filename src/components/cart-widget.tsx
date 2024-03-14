"use client";

import { useCart } from "@/app/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
  const { items } = useCart();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-6 w-6" />
      <p>Cart</p>
      <span className="text-base font-bold text-red-500">{items.length}</span>
    </div>
  );
}
