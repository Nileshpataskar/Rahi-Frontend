import Image from "next/image";

const WhoAreWe = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-secondary px-6 py-10 text-gray-800 md:flex-row md:gap-10 lg:px-20 lg:py-16">
      {/* Text Section */}
      <div className="w-full text-start md:w-2/3 md:text-left">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-4xl">
          About Us
        </h2>
        <p className="font-madefor text-base leading-relaxed md:text-lg">
          <span className="font-extrabold text-red-800">Rahi Industries</span>{" "}
          is a leading innovator in the electrical accessories and solutions
          market. Since our inception, we have been dedicated to providing
          top-tier, high-performance products that meet the demands of modern
          electrical infrastructure.
        </p>

        <p className="mt-6 text-base leading-snug md:text-lg">
          Our extensive range of products includes{" "}
          <span className="font-semibold text-gray-900">
            cable clips, modular gang boxes, MCB distribution units, junction
            boxes, and more.
          </span>{" "}
          We prioritize{" "}
          <span className="font-bold text-red-800">
            innovation, quality, and customer satisfaction
          </span>
          , ensuring that every product meets rigorous industry standards.
        </p>

        <p className="mt-6 text-base leading-snug md:text-lg">
          With a strong commitment to{" "}
          <span className="font-bold text-gray-900">excellence</span>, we have
          earned a reputation for reliability and cutting-edge technology.
          Whether for{" "}
          <span className="font-semibold text-red-800">
            residential, commercial, or industrial applications
          </span>
          , our products provide seamless integration and superior performance.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/3">
        <div className="overflow-hidden rounded-lg border-4 shadow-lg">
          <Image
            src="/assets/electrician2.jpg"
            alt="Company Image"
            width={400}
            height={400}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
