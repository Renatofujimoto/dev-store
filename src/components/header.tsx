import Link from "next/link";
import React from "react";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          DevStore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="h-5 w-5" />
          <input
            placeholder="Buscar Produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-white"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Acount</span>
          <Image
            src="https://github.com/Renatofujimoto.png"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6"
          />
        </Link>
      </div>
    </div>
  );
};

export { Header };
