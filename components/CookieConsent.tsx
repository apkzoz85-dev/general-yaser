"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  const answer = (v: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-16 z-[45] rounded-2xl border border-line bg-white p-4 shadow-xl md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <p className="text-sm leading-6 text-body">
        بنستخدم ملفات الكوكيز لتحسين تجربتك وقياس أداء الإعلانات.{" "}
        <Link href="/privacy" className="font-semibold text-ink underline">
          سياسة الخصوصية
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => answer("accepted")} className="min-h-11 flex-1 rounded-xl bg-ink font-bold text-white">
          موافق
        </button>
        <button type="button" onClick={() => answer("declined")} className="min-h-11 flex-1 rounded-xl border border-ink font-bold text-ink">
          رفض
        </button>
      </div>
    </div>
  );
}
