"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 bg-[#F1F1F1]">
      <footer className="w-full max-w-[1780px] rounded-[40px] border border-[#CCCCCC] bg-[#F1F1F1]">
        {/* Top Section */}
        <div className="px-6 sm:px-10 lg:px-16 pt-14 pb-10 border-b border-[#CCCCCC]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div>
              <img src="/header/logo.png" alt="Logo" className="w-[160px]" />
              <p className="text-sm sm:text-base mt-4 leading-[26px] text-[#4A4A4A] max-w-md">
                Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                turpis massa a id iaculis lorem turpis euismod. Purus at
                quisque integer sit. Libero quis sapien tempus.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Useful Links",
                items: ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"],
              },
              {
                title: "Vehicles",
                items: ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"],
              },
              {
                title: "Services",
                items: ["Rental", "Chauffeur", "Insurance", "Leasing", "Fleet"],
              },
            ].map((section) => (
              <div key={section.title}  className="px-15 w-[250px]">
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-4 ">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#4A4A4A] hover:text-[#1E1E1E] transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4">
            {[faFacebookF, faInstagram, faXTwitter, faYoutube].map((icon, idx) => (
              <div
                key={idx}
                className="h-[40px] w-[40px] bg-[#8D8D8D]  transition duration-200 rounded-full text-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={icon} className="text-[18px]" />
              </div>
            ))}
          </div>

          {/* Info Blocks */}
          {[
            {
              icon: faLocationDot,
              label: "Address",
              value: "Oxford Ave. Cary, NC 27511",
            },
            {
              icon: faEnvelope,
              label: "Email",
              value: "nwiger@yahoo.com",
            },
            {
              icon: faPhone,
              label: "Phone",
              value: "+537 547-6401",
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start gap-4"
            >
              <div className="h-[50px] w-[50px] bg-[#8D8D8D] text-white rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={info.icon} className="text-[20px]" />
              </div>
              <div className="">
                <p className="text-sm text-[#4A4A4A]">{info.label}</p>
                <p className="text-sm font-semibold text-[#1E1E1E]">
                  {info.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
