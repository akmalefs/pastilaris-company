import Button from "../Button";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto mt-24 lg:px-0 px-6">
      <div className="flex lg:flex-row flex-col gap-y-16 justify-between items-center">
        <div className="flex flex-col gap-y-8 order-2 lg:order-1 lg:items-start items-center">
          <h1 className="lg:text-6xl lg:text-start text-center text-4xl text-primary font-extrabold tracking-minus leading-tight">
            <span className="bg-secondary">Making</span> Great Business{" "}
            <span className="bg-secondary">Decision</span>
          </h1>
          <p className="lg:text-lg text-sm text-center lg:text-start text-primary w-9/12 tracking-minus leading-8">
            Track your customers behavior to make a good decision that helps the
            customer use our services better way.
          </p>

          <div className="flex lg:flex-row flex-col gap-4 items-center w-full">
            <Button variant="text-primary bg-secondary py-5 px-7 w-full lg:w-auto">
              Get Started, It’s Free
            </Button>
            <Button variant="bg-transparent border border-primary py-5 px-7 text-primary w-full lg:w-auto">
              Watch Demo
            </Button>
          </div>
        </div>

        <img
          src="./banner_hero.png"
          alt="banner hero"
          className="order-1 lg:order-2"
          width={550}
          height={507}
        />
      </div>
    </section>
  );
};

export default Hero;
