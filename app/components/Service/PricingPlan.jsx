"use client";

import { Img11, Img12, Img13, Img14, Img15 } from "@/public/assets/imgs";
import Image from "next/image";

const PricingPlan = () => {
  const services = [
    { id: 1, name: "عرض الشيوخ", price: "500", image: Img12 },
    { id: 2, name: "عرض الـ", price: "150", image: Img13 },
    { id: 3, name: "عرض الـ", price: "100", image: Img12 },
    { id: 4, name: "عرض الـ", price: "80", image: Img15 },
    { id: 5, name: "عرض الـ", price: "50", image: Img14 },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">أسعار خدماتنا</h2>
          <p className="text-gray-600">اختر الخدمة المناسبة لك بأفضل الأسعار</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="relative rounded-lg overflow-hidden group min-h-[120px]"
            >
              {/* الخلفية مع لون أصفر شفاف */}
              <div className="absolute inset-0">
                <Image
                  src={Img11}
                  alt={s.name}
                  className="object-cover brightness-75 w-full"
                />
                <div className="absolute inset-0 bg-[#c68a3f]/15" />
              </div>

              {/* محتوى الكارت */}
              <div className="relative z-10 backdrop-blur-sm p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-18 h-18 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={65}
                      height={65}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{s.name + " " + s.price}</h3>
                    <p className="text-sm text-gray-600">
                      خدمة احترافية في الصالون
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[#c68a3f] font-bold text-xl">
                    {s.price + " "} ريال
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
