"use client";

import { Logo } from "@/public/assets/imgs";
import Image from "next/image";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-9999 bg-[#252525] flex items-center justify-center">
      <div className="flex items-center justify-center text-center animate-bounce">
        {/* التوقيع - ضع مسار الصورة الصحيح */}
        <div className="w-32 h-16 mx-auto relative">
          <Image src={Logo} alt="signature" fill sizes="100px" className="object-contain" />
        </div>

        <h1 className="text-4xl md:text-5xl text-[#ffba08] font-bold mb-4">
          هير استايل
        </h1>
      </div>
    </div>
  );
};

export default GlobalLoading;
