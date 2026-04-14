import CustomTimeline from "@/components/custom-timeline";

export function TimelineSection() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-nh-notsodarkblue to-nh-lightblue flex flex-col justify-center items-center py-24 lg:py-32 overflow-hidden">
      {/* Decorative blur orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-nh-carolinablue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-nh-darkblue/30 rounded-full blur-[100px] pointer-events-none" />

      <code className="relative z-10 text-3xl lg:text-5xl font-bold text-white text-center mb-10">
        /usr/timeline.sh
      </code>
      <div className="relative z-10 w-full">
        <CustomTimeline />
      </div>
    </section>
  );
}
