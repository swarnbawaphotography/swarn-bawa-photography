"use client";

type GalleryProps = {
  title: string;
  folder: string;
  images: number[];
};

export default function Gallery({
  title,
  folder,
  images,
}: GalleryProps) {
  return (
    <div className="mb-24">
      <h3 className="mb-8 text-3xl font-semibold">{title}</h3>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((number) => (
          <div
            key={number}
            className="mb-5 break-inside-avoid overflow-hidden rounded-2xl"
          >
            <img
              src={`/images/${folder}/${number}.jpg`}
              alt={`${title} ${number}`}
              className="h-auto w-full cursor-pointer transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}