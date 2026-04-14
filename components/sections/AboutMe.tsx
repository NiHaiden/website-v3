export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[80vh] lg:min-h-screen flex justify-center items-center overflow-hidden"
    >
      {/* Decorative blur orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-nh-lightblue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-nh-carolinablue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl px-8 flex flex-col gap-6 py-24 lg:py-32">
        <code className="text-3xl lg:text-5xl bg-clip-text bg-gradient-to-br font-bold text-transparent from-nh-darkblue to-nh-lightblue text-center leading-tight">
          /home/about-me.md
        </code>
        <div className="text-nh-darkblue/90 text-lg lg:text-xl font-medium leading-relaxed space-y-4">
          <p>
            I&apos;ve been obsessed with computers since my early age. What
            started out with the simple things, like sending an E-Mail or
            destroying the installed OS on a computer, turned into a passion for
            life.
          </p>
          <p>
            During the teenage years I went to vocational school to deepen my
            knowledge and get a better grasp at the concept of programming and
            how to write good, efficient code. Over the years I have learned how
            to create my own little programs and even this website you&apos;re
            viewing now.
          </p>
          <p>
            When I&apos;m not in front of the computer hacking NASA, I like to
            go out into nature and take pictures with my camera. I also very much
            enjoy going to parties with friends or family.
          </p>
        </div>
      </div>
    </section>
  );
}
