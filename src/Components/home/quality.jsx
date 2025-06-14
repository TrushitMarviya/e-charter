"use client";
import React from "react";

export default function Quality() {
  return (
    <div className="px-4">
      <div className="max-w-[1482px] mx-auto">
        <p className="text-[#3DBEC8] text-base font-bold text-center">
          ∗ Why Choose Us
        </p>
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] text-[#040401] mx-auto leading-snug text-center font-bold max-w-[600px] mt-2">
          Unmatched Quality and Service for Your Needs
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-10">
          {/* Left Services */}
          <div className="flex flex-col items-start">
            <div className="w-full max-w-[422px] border-b border-gray-200 flex my-6">
              <img src="/homepage/extensive.svg" alt="" className="h-[50px]" />
              <div className="ms-6">
                <p className="text-[20px] font-semibold">Extensive Fleet Options</p>
                <p className="text-base font-semibold pt-2 text-[#616161] text-left">
                  Choose from a wide range of luxury vehicles tailored to suit your style, comfort, and travel needs.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[422px] flex my-6">
              <img src="/homepage/customer.svg" alt="" className="h-[50px]" />
              <div className="ms-6">
                <p className="text-[20px] font-semibold">Customer-Focused Experience</p>
                <p className="text-base font-semibold pt-2 text-[#616161] text-left">
                  We’re dedicated to ensuring a smooth, personalized, and hassle-free journey from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Image - Hidden on md and below */}
          <div className="hidden lg:block">
            <img src="/homePage/quality.png" alt="Quality" className="max-w-full" />
          </div>

          {/* Right Services */}
          <div className="flex flex-col items-start">
            <div className="w-full max-w-[422px] border-b border-gray-200 flex my-6">
              <img src="/homepage/convenient.svg" alt="" className="h-[50px]" />
              <div className="ms-6">
                <p className="text-[20px] font-semibold">Convenient Locations</p>
                <p className="text-base font-semibold pt-2 text-[#616161] text-left">
                  With multiple hubs across the city, we’re always just around the corner—ready when you need us.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[422px] flex my-6">
              <img src="/homepage/reliability.svg" alt="" className="h-[50px]" />
              <div className="ms-6">
                <p className="text-[20px] font-semibold">Reliability and Safety</p>
                <p className="text-base font-semibold pt-2 text-[#616161] text-left">
                  Travel confidently with our well-maintained fleet and trusted chauffeurs who prioritize your safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
