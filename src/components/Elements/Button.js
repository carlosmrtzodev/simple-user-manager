const Button = ({ children }) => {
  return (
    <>
      <div>
        <button className="btn">{children}</button>
      </div>
    </>
  );
};
export default Button;
