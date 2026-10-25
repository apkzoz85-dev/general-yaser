import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/site";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "محلات ومكاتب وعيادات للبيع في التجمع الخامس | 10 مشروعات في صفحة واحدة",
  description:
    "قارن بين أقوى المشروعات التجارية والإدارية والطبية في التجمع الخامس والقاهرة الجديدة: Citystars Park St.، Golden Gate، Sleek، AM:PM، UBL، Midlane، Central، One Ninety، Ark East، W55. مقدم من 5% وتقسيط لحد 8 سنين.",
  keywords: [
    "محلات للبيع في التجمع الخامس",
    "مكاتب إدارية للبيع التجمع الخامس",
    "عيادات للبيع التجمع",
    "مول تجاري التسعين الجنوبي",
    "Golden Gate Redcon",
    "Citystars Park Street",
    "AM:PM Hassan Allam",
    "UBL Urban Walk تعمير",
    "Sleek AlRabat",
    "Midlane Urbnlanes",
    "Central SED",
    "One Ninety LMD",
    "Ark East",
    "W55 Waterway",
  ],
  openGraph: {
    title: "محلات ومكاتب وعيادات في التجمع الخامس",
    description: "10 مشروعات تجارية وإدارية في صفحة واحدة — مقدم من 5% وتقسيط لحد 8 سنين.",
    images: ["/images/sleek.jpg"],
    locale: "ar_EG",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1b2d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@700;800&family=Archivo:wght@500;600;700;800&display=swap"
        />
      </head>
      <body className="antialiased">
        {/* Google Ads gtag — غيّر SITE.gtagId */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gtagId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.gtagId}');`}
        </Script>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
