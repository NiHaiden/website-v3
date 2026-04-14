import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgimg.JPG"
          alt=""
          fill
          className="object-cover object-top lg:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-nh-darkblue/50" />
      </div>

      {/* Decorative blur orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-nh-lightblue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-nh-carolinablue/15 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-32">
        <div className="backdrop-blur-xl bg-black/30 border border-white/[0.15] rounded-3xl p-8 lg:p-14 shadow-2xl">
          <div className="text-white flex flex-col gap-5">
            <div className="font-extrabold text-5xl lg:text-7xl flex flex-col gap-2">
              <span className="drop-shadow-lg">Hi, I am</span>
              <code className="text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-300">
                /home/niklas!
              </code>
            </div>
            <p className="font-medium text-lg lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Living near the Austrian alps in the city of Vienna, I do software
              development as a hobby and professionally. Mostly at home in the
              web dev and JVM world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
