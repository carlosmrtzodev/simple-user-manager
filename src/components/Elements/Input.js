const Input = ({ label, ...res }) => {
  return (
    <>
      <div>
        <label className="block font-bold text-lg text-light">{label}</label>

        <input
          {...res}
          className="text-lg text-dark bg-light w-full rounded-lg outline-0 p-2"
        />
      </div>
    </>
  );
};

export default Input;
