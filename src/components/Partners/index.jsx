const Partners = () => {
  const partners = ["dummy-1", "dummy-2", "dummy-3", "dummy-4", "dummy-5"];

  return (
    <div className="max-w-6xl mx-auto mt-16 lg:px-0 px-6">
      <div className="flex flex-col gap-y-8 justify-center items-center">
        <h1 className="lg:text-4xl text-2xl  text-primary font-bold tracking-minus lg:w-6/12 text-center leading-relaxed lg:leading-tight">
          We’re Helping Big Global Companies Grow
        </h1>

        <div className="flex lg:flex-row flex-col gap-y-8 gap-x-20 items-center">
          {partners.map((item) => (
            <img
              key={item}
              src={`./${item}.png`}
              alt={item}
              className="lg:w-[140px] w-[300px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
