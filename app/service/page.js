import OurService from "../components/Service/OurService";
import PricingPlan from "../components/Service/PricingPlan";
import ServiceProvide from "../components/Service/ServiceProvide";

export const metadata = {
  title: "خدماتنا | هير استايل - صالون رجالي حديث في مصر",
  description:
    "اكتشف جميع خدمات صالون هير استايل في قص الشعر، العناية باللحية، تنظيف البشرة، والصبغات الرجالية. نقدم تجربة راقية بأحدث التقنيات وأفضل الأسعار في مصر.",
  keywords: [
    "هير استايل",
    "صالون رجالي",
    "قصات شعر رجالي",
    "حلاقة ذقن",
    "تنظيف بشرة",
    "صبغة شعر رجالي",
    "صالون في مصر",
    "صالون القاهرة",
  ],
  openGraph: {
    title: "خدماتنا | هير استايل - صالون رجالي عصري",
    description:
      "تعرف على خدمات صالون هير استايل — حلاقة، عناية بالبشرة، وصبغات رجالية بخبرة وأسلوب عصري.",
    url: "https://example.com/services", // غيّرها إلى رابط صفحتك الفعلي
    siteName: "Hair Style",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/assets/imgs/hairstyle_logo_bgwhitewebp.webp",
        width: 1200,
        height: 630,
        alt: "صالون هير استايل الرجالي في مصر",
      },
    ],
  },
  alternates: {
    canonical: "https://example.com/services", // غيّرها للرابط الحقيقي
  },
};

const page = () => {
  return (
    <>
      <ServiceProvide />
      <OurService />
      <PricingPlan />
    </>
  );
};

export default page;
