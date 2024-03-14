"use client";
import { useRouter } from "next/navigation";
export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="mt-6 flex h-12 items-center justify-center rounded-full bg-violet-500 font-semibold text-white"
      onClick={() => router.back()}
    >
      Voltar
    </button>
  );
}
