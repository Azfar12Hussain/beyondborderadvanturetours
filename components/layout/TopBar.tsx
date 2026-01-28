"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-xs sm:text-sm text-gray-700 border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">

        {/* Wrapper */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

          {/* Left side */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p className="whitespace-nowrap">📞 +92-3456564307</p>
            <p className="break-all sm:break-normal">
              📧 beyondbordersadventuretours.com@gmail.com
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p className="whitespace-nowrap">⭐ 6 Years of Travel Excellence</p>
            <p className="whitespace-nowrap">
              ✔ Corporate Unique Identification No. 0315275
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

