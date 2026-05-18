"use client";

import Image from "next/image";

const galleryImages = [
  "/images/gallery/project-1.png",
  "/images/gallery/project-2.png",
  "/images/gallery/project-3.png",
  "/images/gallery/project-4.png",
  "/images/gallery/project-5.png",
  "/images/gallery/project-6.png",
  "/images/gallery/project-8.png",
  "/images/gallery/project-9.png",
  "/images/gallery/project-10.png",
  "/images/gallery/project-11.png",
  "/images/gallery/project-12.png",
  "/images/gallery/project-13.png",
];

const ProjectGallery = () => {
  return (
    <section className="py-16">
      <div className="container">
        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Project Gallery</h2>

          <p className="text-secondary mt-3 max-w-2xl">
            Collection of GIS, remote sensing, and Drone Mapping visualization
            projects that have been developed using modern geospatial
            technologies.
          </p>
        </div>

        {/* ========================= */}
        {/* MASONRY GALLERY */}
        {/* ========================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl break-inside-avoid group"
            >
              <Image
                src={img}
                alt={`gallery-image-${index}`}
                width={800}
                height={1000}
                className="
                  w-full
                  h-auto
                  object-cover
                  transition-all
                  duration-500
                  ease-in-out
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
