"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // =========================
  // POPUP STATE
  // =========================
  const [showPopup, setShowPopup] = useState(false);

  const socialIcon = [
    {
      img: "/images/icon/linkedin.svg",
      href: "https://www.linkedin.com/in/rahmat-hidayat08/",
      icon: "linkedin",
    },
    {
      img: "/images/icon/instagram.svg",
      href: "https://www.instagram.com/rahmatthidaya/",
      icon: "Instagram",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image
              src={"/images/hero-sec/banner-bg-img.png"}
              alt="banner-img"
              width={1080}
              height={267}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="border-x border-primary/10">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              {/* PROFILE IMAGE */}
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image
                  src={"/images/hero-sec/PAS_FOTO_RAHMAT.png"}
                  alt="user-img"
                  width={145}
                  height={145}
                  className="border-4 border-white rounded-full"
                />

                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Rahmat Hidayat</h1>

                <p className="text-violet-700 font-normal">
                  GIS And Spatial Analysist
                </p>

                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon/map-icon.svg"}
                    alt="map-icon"
                    width={20}
                    height={20}
                  />

                  <p className="text-primary">Jakarta, Indonesia</p>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {/* LINKEDIN & INSTAGRAM */}
                  {socialIcon?.map((value, index) => {
                    return (
                      <Link
                        href={value?.href}
                        key={index}
                        target="_blank"
                        className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full"
                      >
                        <Image
                          src={value?.img}
                          alt={value?.icon}
                          width={18}
                          height={18}
                        />
                      </Link>
                    );
                  })}

                  {/* ========================= */}
                  {/* GMAIL POPUP BUTTON */}
                  {/* ========================= */}
                  <button
                    onClick={() => setShowPopup(true)}
                    className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full"
                  >
                    <Image
                      src="/images/icon/gmail.svg"
                      alt="gmail"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>

                {/* BUTTON */}
                <Button asChild className="h-auto rounded-full p-0.5!">
                  <a
                    href="/CV_RAHMAT_HIDAYAT_GIS.pdf"
                    target="_blank"
                    className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                  >
                    <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                      <Image
                        src="/images/icon/spark-icon.svg"
                        alt="spark-icon"
                        width={14}
                        height={14}
                      />

                      <span className="text-sm sm:text-base font-semibold text-white">
                        Download CV
                      </span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* POPUP MODAL */}
      {/* ========================= */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {/* CONTENT */}
            <h2 className="text-2xl font-bold mb-3">Contact Gmail</h2>

            <p className="text-gray-600 mb-5">rahmatthidayat0120@gmail.com</p>

            <Button
              onClick={() => {
                navigator.clipboard.writeText("rahmatthidayat0120@gmail.com");
                alert("Email copied!");
              }}
              className="rounded-full"
            >
              Copy Gmail
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
