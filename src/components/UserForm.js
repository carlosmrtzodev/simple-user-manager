import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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

        <Input
          label="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <Button>Submit</Button>
      </form>
    </>
  );
};

export default UserForm;
