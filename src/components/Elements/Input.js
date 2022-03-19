const Input = ({ label, ...res }) => {
  return (
    <>
      <div>
        <label className="label">{label}</label>

        <input {...res} className="input" />
      </div>
    </>
  );
};
export default Input;
