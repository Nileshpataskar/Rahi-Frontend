import Image from "next/image";

const OurMission = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-secondary px-6 pb-12 pt-16 text-lg text-gray-800 md:px-12 lg:pt-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-left md:text-5xl">
              Our Mission
            </h2>
            <p className="text-center text-base md:text-left md:text-lg">
              At{" "}
              <span className="font-semibold text-red-800">
                Rahi Industries
              </span>
              , we are dedicated to delivering{" "}
              <span className="font-semibold text-red-800">excellence</span>{" "}
              through high-quality products and services. We believe in
              fostering{" "}
              <span className="font-semibold text-red-800">
                trust, innovation, and reliability
              </span>{" "}
              with every interaction.
            </p>

            {/* Key Points */}
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Customer-Centric Approach:",
                  description:
                    "We prioritize customer satisfaction by ensuring top-notch service and support.",
                },
                {
                  title: "Innovation & Excellence:",
                  description:
                    "We continuously evolve, integrating the latest technology to improve our products.",
                },
                {
                  title: "Sustainable Growth:",
                  description:
                    "We are committed to eco-friendly practices and long-term industry leadership.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-gray-900">✔</span>
                  <p className="text-base">
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-4">
              <div className="w-full sm:w-1/2">
                <div className="relative h-64 sm:h-[400px] lg:h-[450px]">
                  <Image
                    src="/images/about/about-image-01.jpg"
                    alt="About Image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <div className="relative h-40 sm:h-[200px] lg:h-[250px]">
                  <Image
                    src="/images/about/about-image-02.jpg"
                    alt="About Image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Experience Card */}
                <div className="relative mt-4 flex items-center justify-center rounded-lg bg-primary px-6 py-10 text-center text-white sm:mt-6 lg:py-12">
                  <div>
                    <span className="block text-5xl font-extrabold">09</span>
                    <span className="block text-lg font-semibold">We have</span>
                    <span className="block text-sm font-medium opacity-80">
                      Years of experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
