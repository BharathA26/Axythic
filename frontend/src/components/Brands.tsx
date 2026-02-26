export default function Brands() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wider">
          Trusted & Loved by 2k+ Users
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold font-serif">Axythic</div>
          <div className="text-2xl font-bold font-sans tracking-tight">
            NVIDIA
          </div>
          <div className="text-2xl font-bold font-mono">MIT</div>
          <div className="text-2xl font-bold italic">Harvard</div>
        </div>
      </div>
    </section>
  );
}
