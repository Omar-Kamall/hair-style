"use client";

import { Img16, Img20, Icon1, Icon2, Icon3, Icon4 } from "@/public/assets/imgs";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "قص الشعر",
    icon: Icon1,
  },
  {
    id: 2,
    title: "ستايل الحلاقة",
    icon: Icon2,
  },
  {
    id: 3,
    title: "بروتين وتغذية الشعر",
    icon: Icon3,
  },
  {
    id: 4,
    title: "صبغات وتلوين",
    icon: Icon4,
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative -mt-20 lg:-mt-20 py-12 lg:mx-[10%]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 lg:gap-0 items-center">
          {/* left image */}
          <div className="relative h-[650px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Img20}
              alt="صورة الخدمة"
              className="object-cover"
              priority
            />
          </div>

          {/* right content box */}
          <div className="relative rounded-lg p-8 lg:p-12 shadow-md bg-white">
            <div className="absolute inset-0 z-0 opacity-10">
              <Image
                src={Img16}
                alt="خلفية الخدمة"
                fill
                sizes="600px"
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                ماذا نفعل؟
              </h2>
              <p className="text-gray-600 mb-8">
                نقدم مجموعة متكاملة من الخدمات الاحترافية للعناية بالشعر
                والحلاقة.
              </p>

              <div className="space-y-5">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-6 bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-gray-100">
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>

                    <div>
                      <Link
                        href="/service"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-md shadow-sm border border-gray-100 text-[#c68a3f] hover:bg-[#f8f0e8] transition"
                        aria-label={`المزيد عن ${s.title}`}
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M9 18l6-6-6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
