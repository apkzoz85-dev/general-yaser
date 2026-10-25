import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: `إخلاء المسؤولية | ${SITE.brand}` };

export default function Disclaimer() {
  return (
    <LegalPage title="إخلاء المسؤولية">
      <p>
        {SITE.brand} مسوق عقاري مستقل وليس المطور العقاري لأي من المشروعات المعروضة، ومنها: Golden Gate (Redcon Properties)، W55 (Waterway)،
        Midlane (Urbnlanes)، One Ninety (LMD)، Central (SED)، Ark East (The Ark Development)، Sleek (AlRabat Properties)، Citystars Park St. (Sky Innovo Developments)، UBL (Tameer)، AM:PM (Hassan Allam Properties).
      </p>
      <h2>الأسعار والمواصفات</h2>
      <p>
        كل الأسعار والمساحات وأنظمة السداد ومواعيد الاستلام المعروضة استرشادية، ومبنية على آخر بيانات وصلتنا من المطورين، وممكن تتغير في أي وقت بدون إشعار
        مسبق. السعر النهائي والمواصفات بيتحددوا في عقد المطور.
      </p>
      <h2>الصور</h2>
      <p>الصور والرندرات المعروضة للتوضيح وممكن تختلف عن الشكل النهائي للمشروع. كل العلامات التجارية ملك أصحابها.</p>
      <h2>المسؤولية</h2>
      <p>المعلومات على الموقع للتعريف فقط ولا تعتبر عرض ملزم أو نصيحة استثمارية. ننصح بمراجعة كل التفاصيل مع المطور قبل التعاقد.</p>
    </LegalPage>
  );
}
