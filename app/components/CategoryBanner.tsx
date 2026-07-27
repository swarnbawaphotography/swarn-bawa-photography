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
    <section className="relative mb-16 h-[360px] overflow-hidden rounded-3xl md:h-[600px]">
      <img
  src={image}
  alt={title}
  className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-[12000ms] hover:scale-110"
/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative flex h-full items-center justify-center text-center">
        <div>
          <h2 className="text-4xl font-light tracking-[0.4em] text-white md:text-6xl">
            {title}
          </h2>

          <p className="mt-4 text-lg tracking-[0.2em] text-gray-200">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}