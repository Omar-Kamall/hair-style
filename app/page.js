import BestParbers from "./components/Home/BestParbers";
import OurClient from "./components/Home/OurClient";
import ServiceWeProvide from "./components/Home/ServiceWeProvide";
import WhatWeDo from "./components/Home/WhatWeDo";
import AwesomePricingPlan from "./components/Home/ِAwesomePricingPlan";
import OurService from "./components/Service/OurService";

export const metadata = {
  title: "صالون هير ستايل | قصّات رجالي عصرية وحلاقة احترافية",
  description:
    "صالون هير ستايل يقدم أفضل خدمات الحلاقة والعناية بالشعر للرجال. قصّات حديثة، بروتين وتغذية الشعر، صبغات وتلوين، وحلاقة احترافية بأحدث التقنيات.",
  keywords: [
    "صالون رجالي",
    "هير ستايل",
    "قص الشعر",
    "حلاقة رجالي",
    "بروتين الشعر",
    "عناية بالشعر",
    "صبغات الشعر",
    "ستايل الحلاقة",
    "صالون في مصر",
  ],
  openGraph: {
    title: "صالون هير ستايل | Hair Style Salon",
    description:
      "تجربة فاخرة في الحلاقة والعناية بالشعر. اكتشف أفضل القصّات والبروتينات والعلاجات الرجالية العصرية.",
    url: "https://your-website-url.com", // 🔹 غيّرها لرابط موقعك
    siteName: "Hair Style Salon",
    images: [
      {
        url: "../assets/imgs/hairstyle_logo_bgwhitewebp.webp",
        width: 1200,
        height: 630,
        alt: "صالون هير ستايل - حلاقة رجالية عصرية",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  alternates: {
    canonical: "https://your-website-url.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "صالون هير ستايل | قصّات رجالي عصرية وحلاقة احترافية",
    description:
      "قصّات شعر عصرية، عناية بالشعر، بروتين، وصبغات — كل ما يحتاجه الرجل في مكان واحد.",
    images: ["/assets/imgs/hairstyle_logo_bgwhitewebp.webp"],
  },
};

export default function Home() {
  return (
    <>
      <WhatWeDo />
      <BestParbers />
      <OurService />
      <ServiceWeProvide />
      <AwesomePricingPlan />
      <OurClient />
    </>
  );
}
