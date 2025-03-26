import Button from "../Button";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto mt-24">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-6xl text-primary font-extrabold tracking-minus leading-tight w-9/12">
            <span className="bg-secondary">Making</span> Great Business <span className="bg-secondary">Decision</span>
          </h1>
          <p className="text-lg text-primary w-7/12 tracking-minus leading-8">
            Track your customers behavior to make a good decision that helps the
            customer use our services better way.
          </p>

          <div className="flex gap-x-4 items-center">
            <Button variant="text-primary bg-secondary py-5 px-7 ">Get Started, It’s Free</Button>
            <Button variant="bg-transparent border border-primary py-5 px-7 text-primary">Watch Demo</Button>
          </div>
        </div>

        <img src="./banner_hero.png" alt="banner hero" width={550} height={507} />
      </div>
    </section>
  );
};

export default Hero;
