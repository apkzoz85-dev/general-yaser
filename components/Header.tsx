"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { track } from "@/lib/wa";
import { PhoneIcon } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1f2f45] bg-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="lat text-lg font-extrabold tracking-wide text-white no-underline sm:text-xl">
          {SITE.brand}
        </Link>
        <nav className="hidden gap-6 text-[15px] md:flex">
          <a href="/#projects" className="text-white no-underline hover:text-gold">المشروعات</a>
          <a href="/#units" className="text-white no-underline hover:text-gold">الوحدات المتاحة</a>
          <a href="/#contact" className="text-white no-underline hover:text-gold">تواصل معنا</a>
        </nav>
        <a
          href={`tel:${SITE.phone}`}
          onClick={() => track("call")}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gold px-4 text-[15px] font-bold text-ink no-underline"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="num">{SITE.phone}</span>
        </a>
      </div>
    </header>
  );
}
