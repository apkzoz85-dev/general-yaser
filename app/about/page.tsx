import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: `من نحن | ${SITE.brand}` };

export default function About() {
  return (
    <LegalPage title="من نحن">
      <p>
        {SITE.brand} شركة تسويق عقاري متخصصة في المشروعات التجارية والإدارية والطبية في القاهرة الجديدة والتجمع الخامس، بخبرة أكثر من 5 سنين في
        السوق العقاري المصري.
      </p>
      <p>
        بنساعد المستثمرين وأصحاب الأعمال يقارنوا بين المشروعات المتاحة، ويختاروا الوحدة المناسبة من حيث الموقع والمساحة ونظام السداد، وبنتابع معاهم
        لحد التعاقد مع المطور.
      </p>
      <h2>إفصاح</h2>
      <p>
        {SITE.brand} مسوق عقاري مستقل وليس المطور العقاري لأي من المشروعات المعروضة على الموقع. كل التعاقدات بتتم مباشرة مع المطور.
      </p>
      <h2>تواصل معنا</h2>
      <p>
        تليفون: <span className="num">{SITE.phone}</span> — بريد إلكتروني: <span className="lat">{SITE.email}</span>
      </p>
    </LegalPage>
  );
}
