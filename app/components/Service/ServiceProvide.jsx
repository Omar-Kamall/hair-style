"use client";

import { Img12, Img13, Img14, Img15 } from "@/public/assets/imgs";
import Image from "next/image";

const ServiceProvide = () => {
  const services = [
    {
      title: "قص الشعر",
      description: "أفضل قصات الشعر الحديثة.",
      imageUrl: Img12, // ضع مسار الصورة هنا
    },
    {
      title: "تصفيف الشعر",
      description: "تصفيفات مميزة تناسب جميع المناسبات.",
      imageUrl: Img13, // ضع مسار الصورة هنا
    },
    {
      title: "حلاقة اللحية",
      description: "حلاقة احترافية تناسب ذوقك.",
      imageUrl: Img14, // ضع مسار الصورة هنا
    },
    {
      title: "عناية بالبشرة",
      description: "خدمات عناية بالبشرة للرجال.",
      imageUrl: Img15, // ضع مسار الصورة هنا
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">خدماتنا</h2>
        <p className="text-gray-600">
          نقدم مجموعة متنوعة من خدمات العناية بالشعر والبشرة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute text-center inset-0 bg-[#00000097] bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-white mt-2">{service.description}</p>
            </div>
            <div className="absolute text-center inset-0 bg-opacity-50 flex opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <div className="bg-[#c68a3f] flex items-center justify-center overflow-hidden">
                <span className="text-white rotate-90">{service.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProvide;
