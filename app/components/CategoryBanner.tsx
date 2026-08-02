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
  className="w-full whitespace-nowrap px-3 text-center text-[clamp(1.7rem,8vw,4.5rem)] font-extralight uppercase tracking-[0.16em] text-white sm:text-6xl sm:tracking-[0.25em] md:text-7xl md:tracking-[0.35em]"
  style={{
    textShadow:
      "0 2px 3px rgba(0,0,0,0.85), 0 6px 14px rgba(0,0,0,0.55)",
  }}
>
  {title}
</h2>

      <p className="mt-6 px-4 text-center text-sm font-light tracking-[0.08em] text-gray-200 sm:text-base sm:tracking-[0.12em] md:px-0 md:text-xl md:tracking-[0.18em]">
        {subtitle}
      </p>
    </div>
  </div>
</section>
  );
}