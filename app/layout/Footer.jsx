"use client";

import { Img4 } from "@/public/assets/imgs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    { id: 1, href: "/", label: "الرئيسية" },
    { id: 2, href: "/about", label: "من نحن" },
    { id: 3, href: "/service", label: "الخدمات" },
    { id: 4, href: "/contact", label: "فروعنا" },
  ];

  return (
    <footer className="relative text-white py-15">
      {/* صورة الخلفية */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Img4}
          alt="خلفية الفوتر"
          className="cover h-full"
        />
      </div>

      <div className="container mx-auto px-[5%] grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* العمود الأول */}
        <div>
          <h3 className="text-lg font-bold mb-4">عن الصالون</h3>
          <p className="text-sm">
            نحن نقدم أفضل خدمات الحلاقة والتجميل للرجال مع فريق محترف.
          </p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
          <p className="text-sm">تواصل معنا عبر وسائل التواصل الاجتماعي:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              فيسبوك
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              إنستغرام
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              تويتر
            </a>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;