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

const TopNav = () => {
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 z-40">
      <div
        className="w-[min(1350px,94%)] bg-white/90 backdrop-blur-sm rounded-b-xl shadow-md px-5 py-2 flex items-center justify-between gap-4"
        role="region"
        aria-label="Top navigation"
      >
        {/* يسار - معلومات الاتصال */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-[#c68a3f] inline-flex">
              <PhoneIcon />
            </span>
            <span>
              <strong>اتصل بنا:</strong>&nbsp;
              <a
                href="tel:+201093333755"
                className="text-[#c68a3f] hover:underline cursor-pointer"
              >
                +201093333755
              </a>
            </span>
          </div>

          <a
            href="https://linktr.ee/hairstaylee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#c68a3f] transition-colors cursor-pointer"
            aria-label="Linktree"
            style={{ pointerEvents: "auto" }}
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
        </div>
      </div>
    </div>
  );
};

export default TopNav;
