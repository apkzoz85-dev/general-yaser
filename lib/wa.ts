import { SITE } from "./site";
import { LABELS, PROJECT_MAP, fmt, type Unit, type ProjectId } from "./data";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(kind: keyof typeof SITE.conversions) {
  try {
    window.gtag?.("event", "conversion", { send_to: SITE.conversions[kind] });
  } catch {}
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function unitMessage(u: Unit) {
  const p = PROJECT_MAP[u.p];
  const area = u.terrace ? `${u.area} م² + ${u.terrace} م² تراس` : `${u.area} م²`;
  const price = u.exact ? `بسعر ${fmt(u.price)} ج.م` : `يبدأ من ${fmt(u.price)} ج.م`;
  return `مرحباً، مهتم بـ ${LABELS[u.label]} في مشروع ${p.name} (${p.dev})\nالمساحة: ${area} — ${price}\nممكن تفاصيل الوحدة ونظام السداد وميعاد معاينة؟`;
}

export function projectMessage(id: ProjectId) {
  const p = PROJECT_MAP[id];
  return `مرحباً، مهتم بمشروع ${p.name} (${p.dev}) في التجمع الخامس.\nممكن الوحدات المتاحة والأسعار وأنظمة السداد؟`;
}

export const generalMessage = "مرحباً، مهتم بوحدة تجارية / إدارية / طبية في التجمع الخامس. ممكن المتاح والأسعار؟";
