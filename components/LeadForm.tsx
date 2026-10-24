"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { PROJECTS, PROJECT_MAP, type ProjectId } from "@/lib/data";
import { track } from "@/lib/wa";

const TYPES = ["محل تجاري", "مكتب إداري", "عيادة", "شقة فندقية", "مش متأكد"];

type Props = {
  source: string;
  defaultProject?: ProjectId | "all";
  defaultType?: string;
  dark?: boolean;
};

export default function LeadForm({ source, defaultProject = "all", defaultType, dark = false }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // honeypot

    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/\s/g, "");
    const project = String(fd.get("project") || "all");
    const type = String(fd.get("type") || "");

    if (name.length < 2) return setError("اكتب اسمك من فضلك");
    if (!/^(\+?20|0)?1[0125]\d{8}$/.test(phone) && !/^\+?\d{9,15}$/.test(phone)) return setError("اكتب رقم موبايل صحيح");
    setError("");
    setLoading(true);

    const projectName = project !== "all" && PROJECT_MAP[project as ProjectId] ? PROJECT_MAP[project as ProjectId].name : "";
    const subject = `ليد جديد — ${projectName || "التجمع تجاري/إداري"} — ${type}`;

    // ابعت الليد لـ Web3Forms (مع timeout عشان التحويل للواتساب مايتأخرش)
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 5000);
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject,
          from_name: SITE.brand,
          name,
          phone,
          project: projectName || "غير محدد",
          unit_type: type,
          source,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
        signal: ctrl.signal,
      });
      clearTimeout(t);
    } catch {}

    track("form");

    const msg = `مرحباً، أنا ${name} (${phone}).\nسجلت بياناتي على الموقع ومهتم بـ ${type}${projectName ? ` في مشروع ${projectName}` : " في التجمع الخامس"}.\nممكن الوحدات المتاحة والأسعار؟`;
    window.location.href = `/thank-you?m=${encodeURIComponent(msg)}`;
  }

  const input = dark
    ? "w-full min-h-12 rounded-xl border border-ink-3 bg-ink-2 px-3 text-white placeholder:text-[#9aa6b6]"
    : "w-full min-h-12 rounded-xl border border-[#cfc7b8] bg-white px-3 text-ink";
  const label = dark ? "text-[#c9cfd8]" : "text-muted";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={`flex flex-col gap-1 text-sm ${label}`}>
          الاسم
          <input name="name" type="text" autoComplete="name" required className={input} />
        </label>
        <label className={`flex flex-col gap-1 text-sm ${label}`}>
          الموبايل
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required dir="ltr" className={`${input} text-right`} />
        </label>
        <label className={`flex flex-col gap-1 text-sm ${label}`}>
          المشروع
          <select name="project" defaultValue={defaultProject} key={defaultProject} className={input}>
            <option value="all">مش متأكد / كل المشروعات</option>
            {PROJECTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.dev}
              </option>
            ))}
          </select>
        </label>
        <label className={`flex flex-col gap-1 text-sm ${label}`}>
          نوع الوحدة
          <select name="type" defaultValue={defaultType || TYPES[0]} key={defaultType} className={input}>
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      {error && (
        <p role="alert" className="text-sm font-semibold text-[#b42318]">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-1 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-wa px-6 text-base font-bold text-white disabled:opacity-70"
      >
        {loading ? "جاري الإرسال..." : "ابعتلي الأسعار على واتساب"}
      </button>
      <p className={`text-xs ${label}`}>بالضغط هتتحول على واتساب برسالة جاهزة فيها طلبك.</p>
    </form>
  );
}
