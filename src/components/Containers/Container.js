const Container = ({ children }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center md:w-2/3 w-3/4 min-h-screen mx-auto animate-fade gap-8 sm:py-0 py-12">
      {children}
    </div>
  );
};

export default Container;
