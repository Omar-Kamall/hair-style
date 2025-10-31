"use client";

import Link from "next/link";

const ContactCard = ({ icon: Icon, title, value, href }) => {
  // لو href موجود، استخدم Link، لو مش موجود خليها div عادي
  const Wrapper = href ? Link : "div";

  // لو الهاتف أو الايميل نضيف البروتوكول
  let linkHref = href;
  if (href && title === "الهاتف") linkHref = `tel:${href}`;
  if (href && title === "البريد الإلكتروني") linkHref = `mailto:${href}`;

  return (
    <Wrapper
      href={linkHref}
      className="block bg-white p-6 rounded-lg shadow-md group hover:bg-[#c68a3f] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#c68a3f] group-hover:bg-white rounded-lg">
          <Icon className="w-6 h-6 text-white group-hover:text-[#c68a3f]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-white/90">{value}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const ContactUs = ({ phone, email, address, location }) => {
  const contactInfo = [
    {
      icon: ({ className }) => (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.897.339 1.84.573 2.8.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: "الهاتف",
      value: phone || "+201559404006",
      href: phone,
    },
    {
      icon: ({ className }) => (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "البريد الإلكتروني",
      value: email || "Contact@heshamrabea.com",
      href: email,
    },
    {
      icon: ({ className }) => (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "العنوان",
      value: address || "314 Street (90) - Hala Mall",
      href: location,
    },
    {
      icon: ({ className }) => (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "الموقع",
      value: "جوجل ماب",
      href: location,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
