import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ServicesCard({ service }) {
  const { title, slug, thumbnail } = service.fields;
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg mx-8 md:py-4 mb-6 md:mb-0">
      <div className="h-72 relative mx-8 md:py-4">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="thumbnail services"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold pb-4">{title}</h3>
        <Link
          href={`/services/${slug}`}
          className="border-2 border-green-800 bg-green-800 px-4 rounded font-bold text-white"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}
