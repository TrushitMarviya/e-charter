"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("one-way");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [personCount, setPersonCount] = useState(1);
  const [luggageCount, setLuggageCount] = useState(0);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    router.push("/search-results");
  };

  const tripIconMap = {
    "one-way": "single-trip",
    "round-trip": "round-trip",
    "local": "multi-stop",
  };

  return (
    <div className="flex justify-center px-4 py-8 md:py-[80px] relative mt-5">
      <div className="w-full max-w-[1780px] rounded-4xl bg-[url('/homePage/hero-bg.png')] bg-cover bg-center bg-no-repeat pt-10 md:pt-[140px] pb-16 md:pb-[100px] lg:min-h-[1000px] xl:min-h-[1100px]">
        <div className="flex flex-col items-center text-center px-4">
          <p className="text-[#3DBEC8] text-sm md:text-base">
            ∗ Welcome To e CHARTER
          </p>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[74px] leading-tight lg:leading-[95px] px-4 max-w-[90%] md:max-w-[1008px] mx-auto mt-4">
            Looking to save more on your rental car?
          </h1>
          <p className="text-white text-sm md:text-[18px] max-w-[90%] sm:max-w-[725px] mx-auto mt-4">
            Whether you're planning a weekend getaway, a business trip, or just
            need a reliable ride for the day, we offer a wide range of vehicles
            to suit your needs.
          </p>
        </div>

        {/* Trip selector section with responsive positioning */}
        <div className="w-full max-w-[1281px] mx-auto px-4 lg:absolute lg:bottom-40 lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div className="bg-white rounded-2xl md:rounded-[30px] mt-12 md:mt-[180px] lg:mt-0 shadow-lg px-4 md:px-6 py-6">
            <div className="space-y-4">
              <div className="w-full border-b border-[#E5E5E5] pb-4">
                <div className="block lg:hidden w-full mb-4">
                  <label className="text-sm font-semibold mb-1 block text-left">
                    Trip Type
                  </label>
                  <select
                    value={activeTab}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "local") {
                        router.push("/multi-stop");
                      } else {
                        setActiveTab(value);
                      }
                    }}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  >
                    <option value="one-way">Single Trip</option>
                    <option value="round-trip">Round Trip</option>
                    <option value="local">Multi Stop</option>
                  </select>
                </div>

                <div className="hidden lg:flex flex-wrap items-center gap-4 lg:gap-6 xl:gap-8">
                  {Object.keys(tripIconMap).map((type) => (
                    <button
                      key={type}
                      className={`flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-semibold ${
                        activeTab === type
                          ? "text-[#3DBEC8] border-b-2 border-[#3DBEC8]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => {
                        if (type === "local") {
                          router.push("/multi-stop");
                        } else {
                          setActiveTab(type);
                        }
                      }}
                    >
                      <img
                        src={`/homepage/${
                          activeTab === type
                            ? tripIconMap[type] + "-active"
                            : tripIconMap[type]
                        }.png`}
                        alt={`${type} icon`}
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                      <span className="capitalize">
                        {type.replace("-", " ")}
                      </span>
                    </button>
                  ))}

                  <div className="flex items-center gap-3 ml-auto">
                    <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full">
                      <span className="text-sm">Person</span>
                      <button
                        onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                        className="w-6 h-6 bg-[#3DC1C4] text-white rounded-full"
                      >-</button>
                      <span>{personCount}</span>
                      <button
                        onClick={() => setPersonCount(personCount + 1)}
                        className="w-6 h-6 bg-[#3DC1C4] text-white rounded-full"
                      >+</button>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full">
                      <span className="text-sm">Luggage</span>
                      <button
                        onClick={() => setLuggageCount(Math.max(0, luggageCount - 1))}
                        className="w-6 h-6 bg-[#3DC1C4] text-white rounded-full"
                      >-</button>
                      <span>{luggageCount}</span>
                      <button
                        onClick={() => setLuggageCount(luggageCount + 1)}
                        className="w-6 h-6 bg-[#3DC1C4] text-white rounded-full"
                      >+</button>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="bg-[#3DBEC8] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#36acb5] text-sm"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-4">
                <div className="w-full lg:w-[23%]">
                  <label className="block text-sm font-semibold text-left mb-1 md:hidden">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {(activeTab === "one-way" || activeTab === "round-trip") && (
                  <div className="w-full lg:w-[23%]">
                    <label className="block text-sm font-semibold text-left mb-1 md:hidden">
                      Dropoff Location
                    </label>
                    <input
                      type="text"
                      placeholder="Drop Off Location"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                )}

                <div className="w-full lg:w-[23%]">
                  <label className="block md:hidden text-sm font-semibold text-left mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {activeTab === "round-trip" && (
                  <div className="w-full lg:w-[23%]">
                    <label className="block md:hidden text-sm font-semibold text-left mb-1">
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}