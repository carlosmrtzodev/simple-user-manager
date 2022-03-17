const Button = ({ children }) => {
  return (
    <>
      <div>
        <button className="text-lg text-light bg-theme hover:brightness-110 transition-all ease-in-out duration-200 rounded-lg px-8 py-2">
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
