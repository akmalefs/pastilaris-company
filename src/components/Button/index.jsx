const Button = ({ children, variant }) => {
  return (
    <a
      href="#"
      className={`${variant} px-5 py-3 rounded-full font-bold  w-fit text-center`}
    >
      {children}
    </a>
  );
};

export default Button;
