"use client";

import { Img5 } from "@/public/assets/imgs";
import Image from "next/image";
import Link from "next/link";

const Panal = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* صورة الخلفية */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={Img5}
          alt="صالون الحلاقة"
          fill
          priority
          className="object-cover"
        />
        {/* طبقة التعتيم */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* المحتوى */}
      <div className="relative h-full w-full flex items-center px-[5%]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-15 items-center mt-40">
          <div className="max-w-2xl fade-in-right">
            <span className="inline-block text-[#c68a3f] text-lg mb-4">
              مرحباً بكم في صالوننا
            </span>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              اكشخ بحلاقة تليق فيك
            </h1>
            <p className="text-gray-100 text-lg mb-8 max-w-lg">
              مو بس حلاقة؛ تجربة فخمة وراحة من أول ما تدخل لين آخر لمسة — وبسعر
              يرضيك 😊.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/service">
                <button className="px-8 py-4 bg-[#c68a3f] text-white rounded-md hover:brightness-110 transition">
                  احجز موعدك الآن
                </button>
              </Link>
              <Link href="/service">
                <button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition">
                  اكتشف خدماتنا
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end fade-in-left">
            {/* زر التشغيل مع الأنيميشن */}
            <button
              className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center group"
              aria-label="شاهد الفيديو"
            >
              {/* دوائر الأنيميشن */}
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
              <span className="absolute inset-0 rounded-full bg-white/50 group-hover:scale-110 transition-transform duration-300" />

              {/* أيقونة التشغيل */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#c68a3f] relative z-10 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* مؤشر السحب لأسفل */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Panal;
