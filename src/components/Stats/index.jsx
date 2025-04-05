const Stats = () => {
  return (
    <div className="bg-primary relative py-14 mt-16 lg:px-0 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex lg:flex-row flex-col gap-y-10  gap-x-56 items-center">
          <h1 className="font-bold lg:text-3xl text-2xl lg:text-start leading-relaxed  text-center text-white lg:leading-tight lg:w-5/12">
            We Have Big Reasons Improve People’s Life Today
          </h1>

          <div className="flex lg:flex-row flex-col gap-y-4 gap-x-20">
            <div className="flex lg:items-start items-center gap-x-4">
              <img src="./icon.png" alt="" width={50} height={50} />

              <header className="flex flex-col">
                <h3 className="text-white font-bold lg:text-[42px] text-xl poppins">
                  12,390
                </h3>
                <p className="text-white lg:text-lg leading-8 text-sm">
                  Happy Customers Using Product
                </p>
              </header>
            </div>

            <div className="flex lg:items-start items-center gap-x-4">
              <img src="./icon-1.png" alt="" width={50} height={50} />

              <header className="flex flex-col">
                <h3 className="text-white font-bold lg:text-[42px] text-xl poppins">
                  829
                </h3>
                <p className="text-white lg:text-lg leading-8 text-sm">
                  Successful On Big Projects
                </p>
              </header>
            </div>
          </div>
        </div>

        <img
          src="./ornamen.png"
          alt="ornamen"
          className="absolute top-0 lg:block hidden left-40 z-0"
          width={381}
          height={250}
        />
      </div>
    </div>
  );
};

export default Stats;
