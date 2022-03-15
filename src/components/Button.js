const Button = ({ children }) => {
  return (
    <>
      <button className="sm:text-xl text-lg font-sans font-bold bg-btn hover:bg-hover text-text transition-all ease-in-out duration-200 rounded-md p-2 mt-2">
        {children}
      </button>
    </>
  );
};

export default Button;
