const Card = ({ children }) => {
  return (
    <>
      <div className="flex flex-col bg-card drop-shadow-2xl lg:w-1/3 w-4/5 rounded-md gap-2 p-8">
        {children}
      </div>
    </>
  );
};

export default Card;
