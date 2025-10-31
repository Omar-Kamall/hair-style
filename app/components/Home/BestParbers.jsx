"use client";

import Image from "next/image";
import { Img14, Img15, Img2 } from "@/public/assets/imgs";

const BestParbers = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          {/* left image - hidden on small, visible on lg+ */}
          <div className="hidden lg:block">
            <div className="relative h-[520px] rounded-md overflow-hidden shadow-lg">
              <Image
                src={Img14}
                alt="left"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* center content */}
          <div className="relative text-center px-4">
            {/* faint watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] opacity-100">
                <Image
                  src={Img2}
                  alt="خلفية-السيكشن"
                  fill
                  sizes="400px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                نحن أفضل حلاقين وصالون قص الشعر
              </h2>
              <p className="text-gray-600 mb-8">
                أحد أسرار النجاح هو اختيار الأدوات الصحيحة — سرويس احترافي برؤية
                واضحة.
              </p>
            </div>
          </div>

          {/* right image - hidden on small, visible on lg+ */}
          <div className="hidden lg:block">
            <div className="relative h-[520px] rounded-md overflow-hidden shadow-lg">
              <Image
                src={Img15}
                alt="right"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestParbers;
