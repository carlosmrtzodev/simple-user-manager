import Input from "../Elements/Input";
import Button from "../Elements/Button";
import useForm from "../../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Lastname"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />

        <Button>
          Submit <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </form>
    </>
  );
};
export default UserForm;
