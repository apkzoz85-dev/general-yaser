"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { PROJECTS, UNITS, LABELS, TYPE_FILTERS, fmt, short, type ProjectId, type UnitType, type Unit } from "@/lib/data";
import { SITE } from "@/lib/site";
import { waLink, unitMessage, projectMessage, track } from "@/lib/wa";
import { WhatsAppIcon, PhoneIcon, PinIcon } from "./Icons";
import LeadForm from "./LeadForm";

type TypeF = "all" | UnitType;
type ProjF = "all" | ProjectId;

const PROJECT_IDS = PROJECTS.map((p) => p.id);
const TYPE_IDS: UnitType[] = ["shop", "office", "clinic", "serviced"];
const FORM_TYPE: Record<TypeF, string | undefined> = {
  all: undefined,
  shop: "محل تجاري",
  office: "مكتب إداري",
  clinic: "عيادة",
  serviced: "شقة فندقية",
};

const TAG: Record<Unit["label"], string> = {
  shop: "bg-[#f3e9d7] text-[#6b4c14]",
  fnb: "bg-[#f6e2d8] text-[#7a3416]",
  office: "bg-[#e2ebf3] text-[#1d4466]",
  oc: "bg-[#e2ebf3] text-[#1d4466]",
  clinic: "bg-[#e0efe6] text-[#1c5a36]",
  serviced: "bg-[#ece4f2] text-[#4b2d66]",
  so: "bg-[#f3e9d7] text-[#6b4c14]",
};

const PAGE = 12;

function pill(active: boolean) {
  return `min-h-11 rounded-full border px-4 text-[15px] font-semibold transition-colors ${
    active ? "border-gold bg-gold text-ink" : "border-[#3c4d63] bg-transparent text-white hover:border-gold"
  }`;
}

export default function Landing() {
  const [type, setType] = useState<TypeF>("all");
  const [project, setProject] = useState<ProjF>("all");
  const [limit, setLimit] = useState(PAGE);

  // روابط الحملات: ?type=shop&project=sl
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const t = q.get("type") as UnitType | null;
    const p = q.get("project") as ProjectId | null;
    if (t && TYPE_IDS.includes(t)) setType(t);
    if (p && PROJECT_IDS.includes(p)) setProject(p);
  }, []);

  const filtered = useMemo(
    () => UNITS.filter((u) => (type === "all" || u.types.includes(type)) && (project === "all" || u.p === project)),
    [type, project],
  );
  const shown = filtered.slice(0, limit);

  const minFor = (t: UnitType) => {
    const u = UNITS.find((x) => x.types.includes(t));
    return u ? short(u.price) : "";
  };

  const pickType = (t: TypeF) => {
    setType(t);
    setLimit(PAGE);
  };
  const pickProject = (p: ProjF) => {
    setProject(p);
    setLimit(PAGE);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src="/images/parkst.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="-z-20 object-cover" />
        {/* طبقة غامقة عشان الصورة ماتبقاش منورة والكلام يفضل واضح */}
        <div className="absolute inset-0 -z-10 bg-ink/75" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink via-ink/60 to-ink/30" aria-hidden="true" />
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:pt-14">
          <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
            <span className="text-sm font-semibold text-gold">التسعين الشمالي · التسعين الجنوبي · محور محمد نجيب · طريق السويس</span>
            <h1 className="font-display text-[30px] font-extrabold leading-[1.45] sm:text-[42px]">محلات ومكاتب وعيادات في التجمع الخامس</h1>
            <p className="max-w-[620px] text-[17px] leading-8 text-[#c9cfd8]">
              قارن بين أقوى المشروعات التجارية والإدارية في التجمع، واختار وحدتك حسب النوع والمساحة ونظام السداد.
            </p>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm text-[#c9cfd8]">بتدور على إيه؟</span>
              <div className="grid max-w-[680px] grid-cols-2 gap-2.5 sm:grid-cols-4">
                {TYPE_FILTERS.slice(1).map((t) => (
                  <a
                    key={t.id}
                    href="#units"
                    onClick={() => {
                      pickType(t.id);
                      pickProject("all");
                    }}
                    className="flex flex-col gap-0.5 rounded-2xl border border-ink-3 bg-ink-2 px-4 py-3.5 text-white no-underline transition-colors hover:border-gold"
                  >
                    <span className="text-base font-bold">{t.label}</span>
                    <span className="text-[13px] text-gold">من {minFor(t.id as UnitType)} ج.م</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="grid max-w-[680px] grid-cols-2 gap-4 border-t border-[#2a3b54] pt-5 sm:grid-cols-4">
              {[
                ["10", "مشروعات"],
                ["5%", "مقدم يبدأ من"],
                ["8 سنين", "تقسيط لحد"],
                ["40%", "خصم كاش لحد"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span className="text-[26px] font-bold text-gold">{v}</span>
                  <span className="text-[13px] text-[#c9cfd8]">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid min-w-0 flex-[1_1_380px] grid-cols-2 grid-rows-[210px_170px] gap-2.5">
            <div className="relative col-span-2 overflow-hidden rounded-2xl">
              <Image src="/images/sleek.jpg" alt="Sleek — AlRabat Properties" fill priority sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image src="/images/w55.jpg" alt="W55 — Waterway" fill sizes="20vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image src="/images/goldengate.jpg" alt="Golden Gate — Redcon" fill sizes="20vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-[1240px] px-4 pb-6 pt-16 sm:px-6">
        <div className="mb-7 flex flex-col gap-2">
          <span className="text-sm font-semibold text-gold-dark">المشروعات</span>
          <h2 className="font-display text-[28px] font-extrabold leading-[1.4] sm:text-[32px]">نظرة سريعة على كل مشروع</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-6">
          {PROJECTS.map((c) => {
            const mine = UNITS.filter((u) => u.p === c.id);
            const minArea = Math.min(...mine.map((u) => u.area));
            return (
              <article key={c.id} className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-white">
                <div className="relative h-[210px] bg-[#0f2a2e]">
                  {c.img ? (
                    <Image src={c.img} alt={`${c.name} — ${c.dev}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1.5 text-white">
                      <span className="lat text-[34px] font-extrabold tracking-[.18em]">{c.name.toUpperCase()}</span>
                      <span className="lat text-[13px] text-[#b9c9c9]">by {c.dev}</span>
                    </div>
                  )}
                  <span className="absolute right-3.5 top-3.5 rounded-full bg-ink px-3 py-1.5 text-[13px] font-semibold text-white">{c.kinds}</span>
                  {c.badge && (
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-gold px-3 py-1.5 text-[13px] font-bold text-ink">{c.badge}</span>
                  )}
                </div>
                <div className="flex flex-grow flex-col gap-3.5 p-[22px]">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="lat text-2xl font-extrabold">{c.name}</h3>
                      <span className="lat text-[13px] text-muted">{c.dev}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-sm text-muted">
                      <PinIcon className="mt-1 h-4 w-4 shrink-0" />
                      <span>{c.loc}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-body">{c.usp}</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 rounded-xl bg-sand p-3.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted">يبدأ من</span>
                      <span className="text-base font-bold">
                        <span className="num">{fmt(mine[0].price)}</span> ج.م
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted">المساحات من</span>
                      <span className="text-base font-bold">
                        <span className="num">{minArea}</span> م²
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted">نظام السداد</span>
                      <span className="text-sm font-bold">{c.plan}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted">الاستلام</span>
                      <span className="text-sm font-bold">{c.delivery}</span>
                    </div>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a
                      href="#units"
                      onClick={() => {
                        pickProject(c.id);
                        pickType("all");
                      }}
                      className="flex min-h-12 flex-grow items-center justify-center rounded-xl bg-ink text-[15px] font-bold text-white no-underline hover:bg-ink-2"
                    >
                      شوف الوحدات (<span className="num">{mine.length}</span>)
                    </a>
                    <a
                      href={waLink(projectMessage(c.id))}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("whatsapp")}
                      className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-wa px-4 text-[15px] font-bold text-wa no-underline hover:bg-[#eef7f1]"
                    >
                      <WhatsAppIcon />
                      واتساب
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* UNITS */}
      <section id="units" className="mx-auto max-w-[1240px] px-4 pb-6 pt-12 sm:px-6">
        <div className="flex flex-col gap-4 rounded-[20px] bg-ink p-5 text-white sm:p-7">
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-gold">الوحدات المتاحة</span>
            <h2 className="font-display text-[26px] font-extrabold leading-[1.4] sm:text-[30px]">اختار نوع الوحدة والمشروع</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="min-w-20 text-sm text-[#c9cfd8]">نوع الوحدة</span>
            {TYPE_FILTERS.map((t) => (
              <button key={t.id} type="button" onClick={() => pickType(t.id)} className={pill(type === t.id)} aria-pressed={type === t.id}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="min-w-20 text-sm text-[#c9cfd8]">المشروع</span>
            <button type="button" onClick={() => pickProject("all")} className={pill(project === "all")} aria-pressed={project === "all"}>
              كل المشروعات
            </button>
            {PROJECTS.map((p) => (
              <button key={p.id} type="button" onClick={() => pickProject(p.id)} className={`${pill(project === p.id)} lat`} aria-pressed={project === p.id}>
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-4 mt-5 text-[15px] text-muted">
          متاح <strong className="num text-ink">{filtered.length}</strong> وحدة حسب اختيارك · مرتبة من الأقل سعراً
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,270px),1fr))] gap-[18px]">
          {shown.map((u) => (
            <UnitCard key={u.id} u={u} />
          ))}
        </div>

        {filtered.length > shown.length && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setLimit(999)}
              className="min-h-12 rounded-xl border border-ink bg-white px-7 text-[15px] font-bold text-ink hover:bg-sand"
            >
              اعرض باقي الوحدات (<span className="num">{filtered.length - shown.length}</span>)
            </button>
          </div>
        )}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-[#cfc7b8] bg-white p-8 text-center text-muted">
            مفيش وحدات بالاختيار ده — سيب رقمك تحت ونبعتلك كل المتاح.
          </p>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1240px] px-4 pb-24 pt-10 sm:px-6">
        <div className="flex flex-wrap items-start gap-8 rounded-[20px] border border-line bg-white p-6 sm:p-8">
          <div className="flex flex-[1_1_300px] flex-col gap-3">
            <h2 className="font-display text-[24px] font-extrabold leading-[1.5] sm:text-[26px]">عايز كل المساحات والأسعار؟</h2>
            <p className="text-[15px] leading-7 text-muted">
              سيب بياناتك وهتتحول على واتساب على طول برسالة فيها المشروع ونوع الوحدة اللي اخترتها، ونبعتلك المتاح بالأسعار وأنظمة السداد.
            </p>
            <a
              href={`tel:${SITE.phone}`}
              onClick={() => track("call")}
              className="mt-2 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl border border-ink px-5 font-bold text-ink no-underline"
            >
              <PhoneIcon />
              <span className="num">{SITE.phone}</span>
            </a>
          </div>
          <div className="min-w-0 flex-[2_1_480px]">
            <LeadForm source="contact-section" defaultProject={project} defaultType={FORM_TYPE[type]} />
          </div>
        </div>
      </section>
    </>
  );
}

function UnitCard({ u }: { u: Unit }) {
  const p = PROJECTS.find((x) => x.id === u.p)!;
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between gap-2">
        <span className={`rounded-lg px-3 py-1 text-[13px] font-bold ${TAG[u.label]}`}>{LABELS[u.label]}</span>
        <span className="lat text-sm font-bold text-ink">{p.name}</span>
      </div>
      <div className="flex flex-wrap items-baseline gap-1.5">
        <span className="num text-[34px] font-bold leading-none">{u.area}</span>
        <span className="text-[15px] text-muted">م²</span>
        {u.terrace > 0 && (
          <span className="rounded-md bg-[#e0efe6] px-2 py-0.5 text-[13px] text-[#1c5a36]">
            + <span className="num">{u.terrace}</span> م² تراس
          </span>
        )}
      </div>
      <div className="flex min-h-11 flex-col gap-1 text-sm text-body">
        <span>{u.note}</span>
        <span className="text-[13px] text-muted">{u.fin}</span>
      </div>
      <div className="flex flex-col gap-1 border-t border-line-2 pt-3">
        <span className="text-xs text-muted">{u.exact ? "السعر" : "يبدأ من"}</span>
        <span className="text-[21px] font-bold">
          <span className="num">{fmt(u.price)}</span> ج.م
        </span>
        <span className="text-[13px] font-semibold text-gold-dark">
          مقدم <span className="num">{fmt(u.price * u.dp)}</span> ج.م · {u.pl}
        </span>
      </div>
      <div className="mt-auto flex gap-2">
        <a
          href={waLink(unitMessage(u))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          className="flex min-h-[46px] flex-grow items-center justify-center gap-2 rounded-xl bg-wa text-[15px] font-bold text-white no-underline hover:brightness-95"
        >
          <WhatsAppIcon />
          احجز معاينة
        </a>
        <a
          href={`tel:${SITE.phone}`}
          onClick={() => track("call")}
          aria-label="اتصل بنا"
          className="flex min-h-[46px] w-[46px] items-center justify-center rounded-xl border border-ink text-ink"
        >
          <PhoneIcon />
        </a>
      </div>
    </article>
  );
}
