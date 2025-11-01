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
        <Image src={Img4} alt="خلفية الفوتر" className="cover h-full" />
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
          <h3 className="text-lg font-bold mb-4 text-white">تواصل معنا</h3>
          <p className="text-sm text-gray-300">
            تواصل معنا عبر وسائل التواصل الاجتماعي:
          </p>
          <div className="flex items-center gap-5 mt-3">
            {/* Linktree */}
            <a
              href="https://linktr.ee/hairstaylee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c68a3f] transition-colors"
              aria-label="Linktree"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 26"
                fill="currentColor"
              >
                <path d="M19.881 6.34096L24.2196 1.88105L26.7378 4.45991L22.1869 8.79846H28.5885V12.3785H22.1565L26.7378 16.8283L24.2196 19.3566L18 13.1067L11.7804 19.3566L9.26221 16.8384L13.8435 12.3886H7.4115V8.79846H13.8131L9.26221 4.45991L11.7804 1.88105L16.1189 6.34096V0H19.881V6.34096ZM16.1189 17.5059H19.881V26.001H16.1189V17.5059Z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@hair.style.saudi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c68a3f] transition-colors"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.5 2h3.1a5.4 5.4 0 0 0 5.4 5.4V11a8.9 8.9 0 0 1-5.4-1.8v6.2a6.6 6.6 0 1 1-6.6-6.6h.6v3.2a3.4 3.4 0 1 0 3.3 3.4V2z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hairstylesaudi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c68a3f] transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8" />
                <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* مواعيد العمل */}
          <div className="flex items-center gap-3 text-sm text-gray-300 mt-4">
            <span className="text-[#c68a3f] inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                />
              </svg>
            </span>
            <span>
              <strong>مواعيد العمل:</strong>&nbsp;السبت - الجمعة، 10 صباحًا - 12
              منتصف الليل (صيف)
            </span>
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
