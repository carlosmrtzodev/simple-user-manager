const Card = ({ children }) => {
  return (
    <>
      <div className="flex flex-col bg-dark drop-shadow-xl rounded-lg w-full gap-2 p-8">
        {children}
      </div>
    </>
  );
};

export default Card;
