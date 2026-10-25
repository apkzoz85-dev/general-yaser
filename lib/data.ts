export type UnitType = "shop" | "office" | "clinic" | "serviced";
export type ProjectId = "sl" | "gg" | "ps" | "ml" | "ce" | "ub" | "on" | "am" | "ak" | "w55";
export type UnitLabel = "shop" | "fnb" | "office" | "clinic" | "oc" | "serviced" | "so";

export interface Project {
  id: ProjectId;
  name: string;
  dev: string;
  loc: string;
  kinds: string;
  badge?: string;
  img?: string;
  usp: string;
  plan: string;
  delivery: string;
  dp: number;
  pl: string;
}

export interface Unit {
  id: string;
  p: ProjectId;
  types: UnitType[];
  label: UnitLabel;
  area: number;
  terrace: number;
  price: number;
  note: string;
  fin: string;
  exact: boolean; // true = سعر الوحدة الفعلي، false = يبدأ من
  dp: number;
  pl: string;
}

// الترتيب ده هو ترتيب الكروت في الصفحة
export const PROJECTS: Project[] = [
  {
    id: "sl",
    name: "Sleek",
    dev: "AlRabat Properties",
    loc: "التسعين الجنوبي × محور محمد نجيب — أمام المونوريل",
    kinds: "تجاري + إداري + طبي",
    badge: "خصم كاش 40%",
    img: "/images/sleek.jpg",
    usp: "3 نواصي بواجهة 110 م على التسعين، 200 محل و180 عيادة، جراج 1,200 عربية. من مطور The Yard وSway وMedical Park.",
    plan: "5% + 5% بعد 3 شهور · 6 سنين",
    delivery: "Q1 2029",
    dp: 0.05,
    pl: "5% + 5% بعد 3 شهور · 6 سنين",
  },
  {
    id: "gg",
    name: "Golden Gate",
    dev: "Redcon Properties",
    loc: "التسعين الجنوبي — أمام الجامعة الأمريكية مباشرة",
    kinds: "تجاري + إداري",
    badge: "New Release",
    img: "/images/goldengate.jpg",
    usp: "واجهة 1.2 كم على التسعين الجنوبي، 29 مبنى على 160 ألف م²، جراج لـ 8,000 عربية وتكييف مركزي District Cooling.",
    plan: "10% مقدم · 5 سنين",
    delivery: "خلال سنتين",
    dp: 0.1,
    pl: "10% مقدم · 5 سنين",
  },
  {
    id: "ps",
    name: "Citystars Park St.",
    dev: "Sky Innovo Developments",
    loc: "المدخل الرئيسي للقاهرة الجديدة — 20 دقيقة من المطار",
    kinds: "إداري",
    badge: "Fairmont · عائد متوقع 13%",
    img: "/images/parkst.jpg",
    usp: "استثمارات 1.9 مليار دولار على 140 ألف م² وواجهة 1.2 كم. إدارة المكاتب بالشراكة مع Fairmont، تصميم LEED، والجراج داخل سعر الوحدة.",
    plan: "5% + 5% بعد 3 شهور · 8 سنين",
    delivery: "[ميعاد الاستلام]",
    dp: 0.1,
    pl: "5% + 5% بعد 3 شهور · 8 سنين",
  },
  {
    id: "ub",
    name: "UBL",
    dev: "Tameer",
    loc: "أمام الجامعة الأمريكية (بوابة 3) — جنب كمبوند AZAD",
    kinds: "إداري",
    badge: "خصم كاش لحد 30%",
    img: "/images/ubl.jpg",
    usp: "Urban Business Lane جوه Urban Walk على 55 فدان: بارك 60 ألف م² وممشى 3 كم. الأرض مسجلة والتمويل العقاري متاح، من تعمير بخبرة 70 سنة.",
    plan: "10% · 7 سنين أو 30% · 3 سنين (فوري)",
    delivery: "فوري أو خلال سنتين",
    dp: 0.1,
    pl: "10% مقدم · 7 سنين",
  },
  {
    id: "am",
    name: "AM:PM",
    dev: "Hassan Allam Properties",
    loc: "Swan Lake New Cairo — 1.4 كم على طريق السويس مباشرة",
    kinds: "تجاري + إداري",
    badge: "خصم كاش 24%",
    img: "/images/ampm.jpg",
    usp: "175 ألف م² بيزنس وريتيل وفندق في Swan Lake، 6 كم من المطار و1 كم من الرحاب. من عملائه Ferrari وMercedes وGourmet.",
    plan: "5% + 5% بعد 3 شهور · 7 سنين",
    delivery: "خلال سنة ونص",
    dp: 0.1,
    pl: "5% + 5% بعد 3 شهور + 5% بعد سنتين · 7 سنين",
  },
  {
    id: "ml",
    name: "Midlane",
    dev: "Urbnlanes",
    loc: "التسعين الشمالي — على محور محمد نجيب مباشرة",
    kinds: "إداري + طبي",
    badge: "خصم كاش لحد 27%",
    usp: "تشطيب كامل بحمام خاص، وخدمات Urbnlanes Elite: housekeeping وصيانة 24/7 وابلكيشن وIT. إدارة RRC International.",
    plan: "من 5% مقدم · لحد 6 سنين",
    delivery: "من 3 شهور (فيز 1)",
    dp: 0.1,
    pl: "",
  },
  {
    id: "ce",
    name: "Central",
    dev: "SED",
    loc: "بين التسعين الشمالي والجنوبي — محور محمد نجيب",
    kinds: "إداري",
    img: "/images/central.jpg",
    usp: "21 فدان و10 مباني إدارية بتصميم WATG، حوالين Courtyard وBoulevard وGrand Plaza، ومنطقة ترفيه عائلي.",
    plan: "5% مقدم · 7 سنين",
    delivery: "[ميعاد الاستلام]",
    dp: 0.05,
    pl: "5% مقدم · 7 سنين",
  },
  {
    id: "on",
    name: "One Ninety",
    dev: "LMD",
    loc: "[التسعين الجنوبي] — التجمع الخامس",
    kinds: "تجاري + إداري",
    img: "/images/oneninety.jpg",
    usp: "جنب W Cairo وUrban Park وCairo Design District. براندات زي PwC والخطوط التركية شغالة فعلاً في المشروع.",
    plan: "5% + 5% بعد 3 شهور · 8 سنين",
    delivery: "من سنة لـ 3 سنين",
    dp: 0.1,
    pl: "5% + 5% بعد 3 شهور · 8 سنين",
  },
  {
    id: "ak",
    name: "Ark East",
    dev: "The Ark Development",
    loc: "التسعين الجنوبي × محور محمد نجيب — 2 كم من المونوريل",
    kinds: "تجاري + إداري + طبي + فندقي",
    img: "/images/ark.jpg",
    usp: "90 فدان و6 بوابات: Business District وMedical Hub وIndoor Mall وفندق. جراج 3–4 أدوار تحت الأرض وطاقة شمسية.",
    plan: "7.5% + 7.5% استلام · 5 سنين",
    delivery: "خلال سنتين",
    dp: 0.075,
    pl: "7.5% + 7.5% استلام · 5 سنين",
  },
  {
    id: "w55",
    name: "W55",
    dev: "Waterway",
    loc: "قلب التجمع الخامس — أمام كمبوند Waterway Villas",
    kinds: "إداري + طبي",
    img: "/images/w55.jpg",
    usp: "55 فدان، كل الوحدات بتطل على سنترال بارك 40 ألف م² وبحيرة والكوبري الدائري. المبنى ينفع مقر كامل أو أدوار منفصلة.",
    plan: "10% مقدم · 8 سنين",
    delivery: "[ميعاد الاستلام]",
    dp: 0.1,
    pl: "10% مقدم · 8 سنين",
  },
];

export const PROJECT_MAP = Object.fromEntries(PROJECTS.map((p) => [p.id, p])) as Record<ProjectId, Project>;

export const LABELS: Record<UnitLabel, string> = {
  shop: "محل تجاري",
  fnb: "مطعم / كافيه",
  office: "مكتب إداري",
  clinic: "عيادة",
  oc: "مكتب / عيادة",
  serviced: "شقة فندقية",
  so: "تجاري / إداري",
};

export const TYPE_FILTERS: { id: "all" | UnitType; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "shop", label: "محلات تجارية" },
  { id: "office", label: "مكاتب إدارية" },
  { id: "clinic", label: "عيادات" },
  { id: "serviced", label: "شقق فندقية" },
];

const U: Unit[] = [];
let n = 0;
function add(
  p: ProjectId,
  types: UnitType[],
  label: UnitLabel,
  area: number,
  terrace: number,
  price: number,
  note: string,
  fin: string,
  exact: boolean,
  dp?: number,
  pl?: string,
) {
  U.push({
    id: `${p}-${++n}`,
    p,
    types,
    label,
    area,
    terrace,
    price,
    note,
    fin,
    exact,
    dp: dp ?? PROJECT_MAP[p].dp,
    pl: pl || PROJECT_MAP[p].pl,
  });
}

// Golden Gate
add("gg", ["office"], "office", 68, 0, 16655000, "Small Offices — مساحات 68 / 93 / 125 لحد 300 م²", "تحت الإنشاء · استلام سنتين", false);
add("gg", ["shop"], "shop", 155, 0, 68000000, "سقف المحلات من 6 لـ 9 متر", "واجهات على التسعين الجنوبي", false);
// W55
add("w55", ["office", "clinic"], "oc", 180, 0, 37000000, "مباني C وD وK — مطلة على شوارع رئيسية", "مكاتب وعيادات", false);
// Midlane
add("ml", ["office", "clinic"], "oc", 46, 0, 13340000, "Midlane Phase 1 — استلام خلال 3 شهور", "تشطيب كامل · خصم كاش 16%", false, 0.1, "10% + 10% استلام · 4 سنين");
add("ml", ["office", "clinic"], "oc", 49, 0, 14502530, "Midlane Phase 2 — New Release", "Fully finished / serviced · استلام 2.5 سنة · خصم كاش 27%", false, 0.05, "5% أو 10% · 6 سنين");
// One Ninety
add("on", ["office"], "office", 112, 0, 27000000, "مباني S05 / S09 / S010", "استلام من سنة لـ 3 سنين", false);
add("on", ["shop"], "shop", 120, 0, 48000000, "تجاري داخل One Ninety", "استلام من سنة لـ 3 سنين", false);
// Central
add("ce", ["office"], "office", 51, 0, 10800000, "مبنى O5 — الدور السادس", "مكاتب من 51 م²", false);
// Citystars Park St.
add("ps", ["office"], "office", 120, 0, 25000000, "مكاتب بطوابق مميزة — مساحات وتقسيمات متنوعة", "جراج تحت الأرض داخل السعر · متاح للحجز الفوري", false);
// UBL — Tameer
add("ub", ["office"], "office", 125, 0, 24000000, "UBL — استلام خلال سنتين", "داخل Urban Walk · خصم كاش لحد 30%", false, 0.1, "10% مقدم · 7 سنين");
add("ub", ["office"], "office", 125, 0, 24000000, "UBL — استلام فوري", "الأرض مسجلة · تمويل عقاري متاح", false, 0.3, "30% مقدم · 3 سنين");
// AM:PM — Hassan Allam
add("am", ["shop", "office"], "so", 155.7, 0, 42600000, "مبنى C02 — مساحات 155.7 لحد 384 م²", "Core & Shell · جراج 1 / 100 م² · استلام سنة ونص", false);
add("am", ["shop", "office"], "so", 221, 0, 66000000, "مبنى A04 — مساحات 221 لحد 244 م²", "Core & Shell · استلام سنة ونص", false);
add("am", ["shop", "office"], "so", 497, 0, 142100000, "مبنى A02", "Core & Shell · استلام سنة ونص", true);
// Ark East
add("ak", ["clinic"], "clinic", 47, 0, 10700000, "C Medical Hub at Cliff", "تشطيب كامل بالتكييفات · استلام سنتين", false);
add("ak", ["office"], "office", 71, 0, 17800000, "Cliff Business District", "Core & Shell · استلام سنتين", false);
add("ak", ["shop"], "shop", 76, 0, 49700000, "Commercial Valley / Indoor Mall", "Core & Shell · استلام سنتين", false);
(
  [
    ["Studio", 52, 8600000],
    ["غرفة نوم", 78, 12800000],
    ["غرفتين نوم", 128, 21100000],
    ["3 غرف نوم", 197, 31900000],
  ] as [string, number, number][]
).forEach(([t, a, pr]) =>
  add("ak", ["serviced"], "serviced", a, 0, pr, `Edge Serviced Residences — ${t}`, "تشطيب كامل بالتكييفات والمطبخ · استلام سنتين", false, 0.05, "5% + 5% استلام · 7 سنين"),
);
// Sleek — وحدات فعلية
(
  [
    [64, 0, 21376000],
    [58, 0, 27260000],
    [74, 0, 29156000],
  ] as [number, number, number][]
).forEach(([a, t, pr]) => add("sl", ["shop"], "shop", a, t, pr, "الدور الأرضي", "سقف 6 متر · استلام Q1 2029", true));
(
  [
    [51.5, 0, 14780500],
    [51, 0, 15555500],
    [61, 0, 17385000],
  ] as [number, number, number][]
).forEach(([a, t, pr]) => add("sl", ["shop"], "shop", a, t, pr, "الدور الأول", "استلام Q1 2029", true));
(
  [
    [58, 27.5, 30225000, "الدور الأرضي"],
    [88.5, 48, 38214000, "الدور الأرضي"],
    [86, 22.5, 50060000, "الدور الأرضي"],
    [118, 40, 45782000, "الدور الأول"],
  ] as [number, number, number, string][]
).forEach(([a, t, pr, f]) => add("sl", ["shop"], "fnb", a, t, pr, f, "بتراس خارجي · استلام Q1 2029", true));
(
  [
    [39, 0, 8853000],
    [47.5, 0, 10402500],
    [53, 8.5, 12668500],
    [65, 7, 13051000],
    [77, 0, 15777300],
    [97, 3, 20968000],
    [110, 38, 24779000],
    [124, 0, 26536000],
    [140.5, 0, 28662000],
  ] as [number, number, number][]
).forEach(([a, t, pr]) => add("sl", ["office"], "office", a, t, pr, "من الدور 2 للدور 6", "Core & Shell · سقف 4 متر", true));
(
  [
    ["أوضة واحدة", 36.5, 0, 7551850],
    ["أوضتين", 50, 0, 11495000],
    ["3 أوض", 73.5, 0, 15103700],
    ["4 أوض", 129, 22, 26733000],
  ] as [string, number, number, number][]
).forEach(([r, a, t, pr]) => add("sl", ["clinic"], "clinic", a, t, pr, `عيادة ${r}`, "تشطيب كامل · استلام Q1 2029", true));

export const UNITS: Unit[] = U.sort((a, b) => a.price - b.price);

export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
export const short = (n: number) => `${Math.round((n / 1e6) * 10) / 10} مليون`;
