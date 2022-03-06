import "./input.css";

const Input = ({ label, ...res }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...res} />
    </div>
  );
};

export default Input;
