"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<any>(null);

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/featured-work");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();

        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching featured work:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
            {featureWork?.map((value: any, index: number) => {
              const isRightCol = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${
                    isRightCol ? "md:border-l md:border-primary/10" : ""
                  }`}
                >
                  {/* ========================= */}
                  {/* IMAGE */}
                  {/* ========================= */}
                  <Link
                    href={value?.link}
                    target="_blank"
                    className="overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={value?.image}
                      alt={value?.title}
                      width={490}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </Link>

                  {/* ========================= */}
                  {/* CONTENT */}
                  {/* ========================= */}
                  <div className="flex flex-col gap-2 px-2">
                    {/* TITLE */}
                    <Link href={value?.link} target="_blank">
                      <h4 className="hover:text-violet-600 transition">
                        {value?.title}
                      </h4>
                    </Link>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-secondary">
                      {value?.description}
                    </p>

                    {/* ROLES */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {value?.roles?.map((role: string, roleIndex: number) => (
                        <span
                          key={roleIndex}
                          className="text-xs border border-primary/10 px-3 py-1 rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
