const Container = ({ children }) => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-8 h-screen mx-auto">
      {children}
    </div>
  );
};

export default Container;
