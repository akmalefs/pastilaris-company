import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white px-8 py-3 max-w-7xl mx-auto rounded-full mt-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-7 items-center">
          <img src="./logo.png" alt="Logo Pastilaris" width={176} height={34} />

          <div class="w-px h-[50px] bg-gray-400"></div>

          <ul className="flex space-x-10">
            <li>
              <a
                href="#"
                className="hover:text-secondary font-semibold hover:underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-secondary font-semibold hover:underline"
              >
                vs. Slock
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-secondary font-semibold hover:underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-secondary font-semibold hover:underline"
              >
                Showcase
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-3">
          <Button variant="bg-white text-primary">Call Sales</Button>
          <Button variant="bg-transparent border border-white">
            My Account
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
