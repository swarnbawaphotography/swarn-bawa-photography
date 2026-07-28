type CategoryBannerProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function CategoryBanner({
  title,
  subtitle,
  image,
}: CategoryBannerProps) {
  return (
    <section className="relative mb-20 h-[420px] overflow-hidden rounded-xl md:h-[700px]">
  <img
  src={image}
  alt={title}
  className="absolute inset-0 h-full w-full object-cover object-top translate-y-8 scale-105 animate-bannerZoom"
/>

  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/5" />

  <div className="relative flex h-full items-center justify-center translate-y-24 text-center">
    <div>
      <h2
  className="text-5xl font-extralight tracking-[0.35em] text-white sm:text-6xl md:text-7xl"
  style={{
    textShadow:
      "0 2px 3px rgba(0,0,0,0.85), 0 6px 14px rgba(0,0,0,0.55)",
  }}
>
  {title}
</h2>

      <p className="mt-6 px-6 text-lg font-light tracking-[0.18em] text-gray-200 md:px-0 md:text-xl">
        {subtitle}
      </p>
    </div>
  </div>
</section>
  );
}