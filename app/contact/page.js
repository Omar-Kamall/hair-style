import ContactUs from "../components/Contact/ContactUs";

export const metadata = {
  title: "تواصل معنا | هير استايل - صالون رجالي في السعودية",
  description:
    "تواصل مع صالون هير استايل للحصول على أفضل خدمات الحلاقة والعناية الرجالية. لدينا فروع في الرياض والخبر والدمام لتقديم تجربة فاخرة ومريحة.",
  keywords: [
    "هير استايل",
    "صالون رجالي",
    "صالون حلاقة",
    "صالون الرياض",
    "صالون الخبر",
    "صالون الدمام",
    "حلاقة شعر رجالي",
    "تنظيف بشرة رجالي",
    "صالون فاخر",
  ],
  openGraph: {
    title: "تواصل معنا | هير استايل - فروعنا في الرياض والخبر والدمام",
    description:
      "زوروا أقرب فرع من صالون هير استايل أو تواصلوا معنا للحجز والاستفسار. فروعنا في الرياض والخبر والدمام تقدم تجربة حلاقة راقية بأسلوب عصري.",
    url: "https://example.com/contact", // غيّرها إلى رابط صفحتك الفعلي
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
    canonical: "https://example.com/contact", // غيّرها للرابط الحقيقي
  },
};

const page = () => {
  return (
    <>
      <ContactUs
        phone={"+21006677555"}
        email={"example@gmail.com"}
        address={"فرع الرياض"}
        location={
          "https://www.google.com/maps/place/%D8%B5%D8%A7%D9%84%D9%88%D9%86+%D9%87%D9%8A%D8%B1+%D8%B3%D8%AA%D8%A7%D9%8A%D9%84+%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82%D8%A9%E2%80%AD/@24.5801557,46.5439108,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f190072d4d74b:0x81dbff2dd278a52d!8m2!3d24.5801557!4d46.5439108!16s%2Fg%2F11xsnl2cyh?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
        }
      />
      <ContactUs
        phone={"+21006677555"}
        email={"example@gmail.com"}
        address={"فرع الخبر"}
        location={
          "https://www.google.com/maps?q=75VW+QM4+%D8%B5%D8%A7%D9%84%D9%88%D9%86+%D9%87%D9%8A%D8%B1+%D8%B3%D8%AA%D8%A7%D9%8A%D9%84+%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82%D8%A9,+Al+Aqrabiyah,+%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3+%D8%B9%D8%B4%D8%B1,+Al+Khobar+34446&ftid=0x3e49e9576acfcfed:0xf78383b25d2e98ce&entry=gps&lucs=,94286594,94284472,94224825,94227247,94227248,94231188,94280568,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM4LjAuODA3MzYwMDM5MBgAIIgnKnUsOTQyODY1OTQsOTQyODQ0NzIsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksNDcwODQzMDRCAlNB&skid=979827a8-a6b5-45b3-ba34-aa6b8287d35f&g_st=ipc"
        }
      />
      <ContactUs
        phone={"+21006677555"}
        email={"example@gmail.com"}
        address={"فرع الدمام قريباً"}
        location={
          "https://www.google.com/maps/place/%D8%B5%D8%A7%D9%84%D9%88%D9%86+%D9%87%D9%8A%D8%B1+%D8%B3%D8%AA%D8%A7%D9%8A%D9%84+%D9%84%D9%84%D8%AD%D9%84%D8%A7%D9%82%D8%A9%E2%80%AD/@24.5801557,46.5439108,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f190072d4d74b:0x81dbff2dd278a52d!8m2!3d24.5801557!4d46.5439108!16s%2Fg%2F11xsnl2cyh?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
        }
      />
    </>
  );
};

export default page;
