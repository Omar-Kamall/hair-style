"use client";

import Image from "next/image";
import PricingPlan from "../Service/PricingPlan";
import { Img10 } from "@/public/assets/imgs";

const AwesomePricingPlan = () => {
  return (
    <section className="relative py-24">
      {/* خلفية الصورة مع تظليل */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Img10}
          alt="خلفية خطة الأسعار"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* المحتوى */}
      <div className="relative flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide">
          خطة الأسعار المميزة
        </h2>
        <p className="text-white/90 mt-2 max-w-2xl">
          باقات وخدمات احترافية بأسعار واضحة — اختر الخدمة المناسبة لك
        </p>
      </div>

      {/* الصندوق الأبيض للكروت */}
      <div className="relative mt-16 mb-20">
        <div className="max-w-[820px] mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <PricingPlan />
        </div>
      </div>
    </section>
  );
};

export default AwesomePricingPlan;
