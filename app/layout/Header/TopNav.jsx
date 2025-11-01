"use client";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.09 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.77.76 2.58a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.81.38 1.68.64 2.58.76A2 2 0 0 1 22 16.92z"
      fill="currentColor"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 7v6l4 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.92v-7.02H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.99 0 2.03.18 2.03.18v2.24h-1.15c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.9h-2.12V22c4.78-.8 8.44-4.93 8.44-9.93z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M16 11.37A4 4 0 1 1 12.63 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 6.5h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TopNav = () => {
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 z-40">
      <div
        className="w-[min(1350px,94%)] bg-white/90 backdrop-blur-sm rounded-b-xl shadow-md px-5 py-2 flex items-center justify-between gap-4"
        role="region"
        aria-label="Top navigation"
      >
        {/* يسار - معلومات الاتصال */}
        <div className="flex items-center flex-wrap">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-[#c68a3f] inline-flex">
              <PhoneIcon />
            </span>
            <span>
              <strong>اتصل بنا:</strong>&nbsp;
              <a
                href="tel:+201093333755"
                className="text-[#c68a3f] hover:underline"
              >
                +201093333755
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-[#c68a3f] inline-flex">
              <ClockIcon />
            </span>
            <span>
              <strong>مواعيد العمل:</strong>&nbsp;السبت - الجمعة، 10 صباحًا - 12
              منتصف الليل (صيف)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
