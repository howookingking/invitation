import Image from "next/image";
import React from "react";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col justify-center px-6 py-16"
    >
      <div className="max-w-md mx-auto space-y-8">
        <h2 className="text-2xl font-light text-center text-gray-800">
          Gallery
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {new Array(21).fill(0).map((_, i) => (
            <div className="w-full h-w-full overflow-hidden relative">
              <Image
                key={i}
                src={`/photos/gallery/${i + 1}.jpg`}
                alt="wedding photo"
                width={100}
                height={100}
                className="object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
