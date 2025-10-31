"use client";

import { Img15 } from "@/public/assets/imgs";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* صورة القسم */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={Img15} // ضع مسار الصورة هنا
              alt="صورة عن الصالون"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* محتوى النص */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              نعمل في مجال الحلاقة والعناية بالشعر منذ 2001
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              لدينا نخبة من أمهر مصففي الشعر في مصر والعالم العربي. بدأنا من
              المقطم، وتوسعت الفروع حتى أصبحنا شركة، ونمتلك أكثر من 11 فرعاً
              داخل القاهرة الكبرى، ونستعد للانتشار في الخليج العربي.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              شعارنا هو الجودة والإبداع والابتكار.
            </p>

            <div className="flex gap-4">
              <Link
                href="/branches"
                className="bg-[#c68a3f] text-white px-8 py-3 rounded-md hover:opacity-90 transition"
              >
                فروعنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
