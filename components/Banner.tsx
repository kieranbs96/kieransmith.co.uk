function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="banner relative mb-4 flex flex-col justify-center overflow-hidden py-4 pt-12 md:items-center md:px-4 md:py-12">
      <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      {subtitle && <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl">{subtitle}</p>}
    </div>
  );
}

export default Banner;
