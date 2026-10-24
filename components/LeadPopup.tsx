"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";
import { CloseIcon } from "./Icons";

const KEY = "lead-popup-shown";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (shown) return;

    const show = () => {
      if (shown) return;
      shown = true;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h >= 0.57) show();
    };
    const timer = window.setTimeout(show, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });
    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="relative w-full max-w-[560px] rounded-t-3xl bg-ink p-6 text-white sm:rounded-3xl sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="إغلاق"
          className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-[#c9cfd8] hover:bg-ink-2"
        >
          <CloseIcon />
        </button>
        <span className="text-sm font-semibold text-gold">مقدم من 5% · خصم كاش لحد 40%</span>
        <h2 id="popup-title" className="mb-1 mt-2 font-display text-[22px] font-extrabold leading-[1.5]">
          ابعتلك أسعار كل الوحدات المتاحة على واتساب؟
        </h2>
        <p className="mb-5 text-sm text-[#c9cfd8]">اختار المشروع ونوع الوحدة، وهتتحول على واتساب على طول.</p>
        <LeadForm source="popup" dark />
      </div>
    </div>
  );
}
