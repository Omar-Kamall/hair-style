import AboutUs from "../components/About/AboutUs";

export const metadata = {
  title: "من نحن | هير استايل - صالون رجالي بخبرة عصرية في السعودية",
  description:
    "تعرّف على صالون هير استايل، أحد أبرز الصالونات الرجالية في السعودية. نقدم قصّات شعر عصرية، عناية بالبشرة، وحلاقة راقية بخبرة فريق محترف لتمنحك مظهراً أنيقاً وتجربة فاخرة.",
  keywords: [
    "هير استايل",
    "صالون رجالي",
    "من نحن هير استايل",
    "صالون حلاقة",
    "صالون الرياض",
    "صالون الخبر",
    "صالون الدمام",
    "قصات شعر رجالي",
    "حلاقة ذقن",
    "صالون فاخر",
  ],
  openGraph: {
    title: "من نحن | هير استايل - صالون رجالي بخبرة عصرية",
    description:
      "اكتشف قصة هير استايل — صالون رجالي يقدم تجربة فاخرة تجمع بين الخبرة، الأناقة، والاهتمام بالتفاصيل.",
    url: "https://example.com/about", // غيّرها إلى رابط صفحتك الفعلي
    siteName: "Hair Style",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/assets/imgs/hairstyle_logo_bgwhitewebp.webp",
        width: 1200,
        height: 630,
        alt: "صالون هير استايل الرجالي في السعودية",
      },
    ],
  },
  alternates: {
    canonical: "https://example.com/about", // غيّرها للرابط الحقيقي
  },
};

const page = () => {
  return <AboutUs />;
};

export default page;
