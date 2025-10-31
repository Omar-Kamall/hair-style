"use client";

import Link from "next/link";
import Image from "next/image";
import { Img3 } from "@/public/assets/imgs";

const OurService = () => {
  return (
    <section className="relative py-15 container mx-auto px-[5%] overflow-hidden">
      {/* خلفية القسم */}
      <div className="absolute inset-0">
        {/* صورة الخلفية */}
        <div className="absolute inset-0 bg-[#D6A354]" />
        <Image
          src={Img3}
          alt="خلفية-القسم"
          fill
          priority
          className="object-cover select-none pointer-events-none"
        />
        {/* اللون الأصفر الشفاف */}
      </div>

      {/* المحتوى */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* العنوان والوصف */}
          <div className="text-white mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              مستعد للحصول على خدماتنا؟
            </h2>
            <p className="text-white/90 text-lg">
              نقدم أفضل خدمات الحلاقة والعناية بالشعر
            </p>
          </div>

          {/* زر الفروع */}
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-[#c68a3f] px-8 py-4 rounded-lg 
              font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 
              shadow-lg hover:shadow-xl group"
          >
            فروعنا
            <svg
              className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurService;
