"use client";

import { Img16, Img17, Img21, Icon1, Icon2, Icon3 } from "@/public/assets/imgs";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "قص الشعر",
    subtitle: "تصميم قصات عصرية تناسب كل الأذواق",
    bg: Img16,
    icon: Icon1,
  },
  {
    id: 2,
    title: "بروتين وتغذية الشعر",
    subtitle: "علاج وتقوية ونعومة طويلة الأمد",
    bg: Img16,
    icon: Icon2,
  },
  {
    id: 3,
    title: "حلاقة احترافية",
    subtitle: "حلاقة دقيقة ومظهر أنيق",
    bg: Img16,
    icon: Icon3, // 🔹 هنا استُبدلت الأيقونة بصورة
  },
];

const ServiceWeProvide = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* صور الزخارف (يمين وشمال) */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 lg:w-96 lg:h-96 opacity-20">
        <Image src={Img17} alt="خلفية-السيكشن" className="object-contain" />
      </div>

      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 lg:w-96 lg:h-96 opacity-20">
        <Image src={Img21} alt="خلفية-السيكشن" className="object-contain" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            الخدمات التي نقدمها
          </h2>
          <p className="text-gray-600 mt-2">
            مجموعة متكاملة من خدمات الحلاقة والعناية بالشعر
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s) => (
            <article
              key={s.id}
              className="group relative rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              {/* خلفية الكارت */}
              <div className="absolute inset-0">
                <Image
                  src={s.bg}
                  alt={s.title}
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
              </div>

              {/* طبقة بيضاء شبه شفافة */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/80 to-white/60" />

              {/* المحتوى */}
              <div className="relative p-8 h-64 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* صورة الأيقونة */}
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.subtitle}</p>

                <Link
                  href="/service"
                  className="mt-6 inline-flex items-center bg-white text-[#c68a3f] px-4 py-3 rounded-md shadow hover:bg-white/90 transition"
                >
                  المزيد
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWeProvide;
