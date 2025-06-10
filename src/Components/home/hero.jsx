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
    e.preventDefault();
    // Process form data and navigate to search results
    router.push("/search-results");
  };

  return (
    <div className="flex justify-center mt-[110px]">
      <div className="w-[1780px] h-[881px] rounded-4xl bg-[url('/homePage/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <p className="text-center text-[#3DBEC8] flex items-center justify-center text-base lg:mt-[170px]">
          ∗ Welcome To e CHARTER
        </p>
        <p className="text-center flex justify-center text-[#FFFFFF] font-bold w-[1008px] mx-auto text-[74px] leading-[95px]">
          Looking to save more on your rental car?
        </p>
        <p className="text-center flex justify-center text-[#FFFFFF] w-[725px] mx-auto text-[18px]">
          Whether you're planning a weekend getaway, a business trip, or just
          need a reliable ride for the day, we offers a wide range of vehicles
          to suit your needs.
        </p>

        {/* Trip Selection Form - Matching Figma Design */}
        <div className="h-[185px] w-[1281px] mx-auto bg-white rounded-[30px] mt-[210px] shadow-lg">
          <div className="h-full p-4 border">
            {/* Trip Type Tabs */}
            <div className="flex border-b border-[#E5E5E5] border-2">
              <button
                className={`px-6 py-3 text-sm flex justify-center items-center gap-2 font-semibold ${
                  activeTab === "one-way"
                    ? "text-[#3DBEC8] border-b-2 border-[#3DBEC8]"
                    : "text-[#666666]"
                }`}
                onClick={() => setActiveTab("one-way")}
              >
                <img
                  src={
                    activeTab === "one-way"
                      ? "/homepage/single-trip-active.png"
                      : "/homepage/single-trip.png"
                  }
                  alt="Single Trip"
                />
                Single Trip
              </button>
              <button
                className={`px-6 py-3 text-sm flex justify-center items-center gap-2 font-semibold ${
                  activeTab === "round-trip"
                    ? "text-[#3DBEC8] border-b-2 border-[#3DBEC8]"
                    : "text-[#666666]"
                }`}
                onClick={() => setActiveTab("round-trip")}
              >
                <img
                  src={
                    activeTab === "round-trip"
                      ? "/homepage/round-trip-active.png"
                      : "/homepage/round-trip.png"
                  }
                  alt="Round Trip"
                />
                Round Trip
              </button>
              <button
                className={`px-6 py-3 text-sm flex justify-center items-center gap-2 font-semibold ${
                  activeTab === "local"
                    ? "text-[#3DBEC8] border-b-2 border-[#3DBEC8]"
                    : "text-[#666666]"
                }`}
                onClick={() => setActiveTab("local")}
              >
                <img
                  src={
                    activeTab === "local"
                      ? "/homepage/multi-stop-active.png"
                      : "/homepage/multi-stop.png"
                  }
                  alt="Multi Stop"
                />
                Multi Stop
              </button>
              <div className="flex items-center justify-between flex-wrap gap-4 mx-auto">
                {/* Person Counter */}
                <div className="flex items-center gap-5 p-3 border border-gray-300 rounded-full h-[80%]">
                  <span className="text-base text-[#000] font-medium ">
                    Person
                  </span>
                  <button
                    type="button"
                    onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                    className="w-8 h-8 bg-[#3DC1C4] text-[#FFF] rounded-full flex items-center justify-center text-3xl"
                  >
                    -
                  </button>
                  <span className="min-w-[20px] text-center text-xl font-medium">
                    {personCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPersonCount(personCount + 1)}
                    className="w-8 h-8 bg-[#3DC1C4] text-[#FFF] rounded-full flex items-center justify-center text-2xl"
                  >
                    +
                  </button>
                </div>

                {/* Luggage Counter */}
                <div className="flex items-center gap-5 p-3 border border-gray-300 rounded-full h-[80%]">
                  <span className="text-base text-[#000] font-medium ">
                    Luggage
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setLuggageCount(Math.max(0, luggageCount - 1))
                    }
                    className="w-8 h-8 bg-[#3DC1C4] text-[#FFF] rounded-full flex items-center justify-center text-3xl"
                  >
                    -
                  </button>
                  <span className="min-w-[20px] text-center text-xl font-medium">
                    {luggageCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLuggageCount(luggageCount + 1)}
                    className="w-8 h-8 bg-[#3DC1C4] text-[#FFF] rounded-full flex items-center justify-center text-2xl"
                  >
                    +
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#3DBEC8] text-white px-6 py-3 font-semibold hover:bg-[#36acb5] transition-all text-base rounded-full "
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex items-center gap-4">
                {/* Pickup Location */}
                {/* Pickup Location */}
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src="/homepage/pickup.png"
                      alt="Pickup Icon"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full pl-10 p-3 border-b border-[#DDDDDD] font-semibold focus:outline-none focus:ring-2 focus:ring-[#3DBEC8] text-[#333333]"
                    />
                  </div>
                </div>

                {/* Dropoff Location - Only shown for One Way and Round Trip */}
                {(activeTab === "one-way" || activeTab === "round-trip") && (
                  <div className="flex-1">
                    <div className="relative">
                      <img
                        src="/homepage/drop.png"
                        alt="Dropoff Icon"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Drop Off Location"
                        value={dropoffLocation}
                        onChange={(e) => setDropoffLocation(e.target.value)}
                        className="w-full pl-10 p-3 border-b border-[#bbbbbb] font-semibold focus:outline-none focus:ring-2 focus:ring-[#3DBEC8] text-[#333333]"
                      />
                    </div>
                  </div>
                )}

                {/* Pickup Date */}
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full p-3 border-b border-[#bbbbbb] font-semibold  focus:outline-none focus:ring-2 focus:ring-[#3DBEC8] text-[#333333]"
                    />
                  </div>
                </div>

                {/* Return Date - Only shown for Round Trip */}
                {activeTab === "round-trip" && (
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full p-3 border-b border-[#bbbbbb] font-semibold  focus:outline-none focus:ring-2 focus:ring-[#3DBEC8] text-[#333333]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
