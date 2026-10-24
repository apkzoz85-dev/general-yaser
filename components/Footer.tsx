import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-10 text-[#c9cfd8] md:pb-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="lat text-lg font-extrabold text-white">{SITE.brand}</span>
          <nav className="flex flex-wrap gap-5 text-sm">
            <Link href="/about" className="text-[#c9cfd8] no-underline hover:text-gold">من نحن</Link>
            <Link href="/privacy" className="text-[#c9cfd8] no-underline hover:text-gold">سياسة الخصوصية</Link>
            <Link href="/disclaimer" className="text-[#c9cfd8] no-underline hover:text-gold">إخلاء المسؤولية</Link>
          </nav>
        </div>
        <p className="text-[13px] leading-7">
          {SITE.brand} مسوق عقاري مستقل وليس المطور العقاري لأي من المشروعات المعروضة. أسماء المشروعات والشعارات والصور ملك لأصحابها
          (Redcon Properties، Waterway، Urbnlanes، LMD، SED، The Ark Development، AlRabat Properties).
        </p>
        <p className="text-[13px] leading-7">
          * الأسعار والمساحات وأنظمة السداد استرشادية وفقاً لآخر تحديث من المطورين، وقابلة للتغيير بدون إشعار مسبق. التعاقد النهائي يتم مع المطور.
        </p>
        <p className="text-xs text-[#8a96a8]">© {new Date().getFullYear()} {SITE.brand}. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
