"use client";

import { SITE } from "@/lib/site";
import { waLink, generalMessage, track } from "@/lib/wa";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop floating */}
      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={waLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          aria-label="تواصل واتساب"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-lg"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <a
          href={`tel:${SITE.phone}`}
          onClick={() => track("call")}
          aria-label="اتصل بنا"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lg"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white md:hidden">
        <a
          href={`tel:${SITE.phone}`}
          onClick={() => track("call")}
          className="flex min-h-14 items-center justify-center gap-2 text-[15px] font-bold text-ink no-underline"
        >
          <PhoneIcon /> اتصل
        </a>
        <a
          href={waLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          className="flex min-h-14 items-center justify-center gap-2 bg-wa text-[15px] font-bold text-white no-underline"
        >
          <WhatsAppIcon /> واتساب
        </a>
        <a href="#units" className="flex min-h-14 items-center justify-center text-[15px] font-bold text-ink no-underline">
          الوحدات
        </a>
      </div>
    </>
  );
}
