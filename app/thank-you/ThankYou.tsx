"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { waLink, generalMessage } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/Icons";

export default function ThankYou() {
  const [href, setHref] = useState(waLink(generalMessage));

  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get("m");
    const link = waLink(m || generalMessage);
    setHref(link);
    const t = window.setTimeout(() => {
      window.location.href = link;
    }, 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e0efe6] text-wa">
        <WhatsAppIcon className="h-8 w-8" />
      </div>
      <h1 className="font-display text-[28px] font-extrabold leading-[1.5]">شكراً، طلبك وصل!</h1>
      <p className="text-[16px] leading-8 text-muted">بنحوّلك دلوقتي على واتساب برسالة فيها طلبك. لو التحويل ماحصلش، اضغط على الزرار.</p>
      <a href={href} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-wa px-6 text-base font-bold text-white no-underline">
        <WhatsAppIcon />
        افتح واتساب
      </a>
      <Link href="/" className="text-sm text-muted underline">
        الرجوع للصفحة الرئيسية
      </Link>
    </>
  );
}
