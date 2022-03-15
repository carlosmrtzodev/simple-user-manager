const Input = ({ label, ...res }) => {
  return (
    <>
      <label className="block font-sans font-bold sm:text-lg text-sm text-text">
        {label}
      </label>

      <input
        {...res}
        className="font-mono sm:text-lg text-sm text-dark bg-input text-bckg rounded-md outline-0 p-2"
      />
    </>
  );
};

export default Input;
