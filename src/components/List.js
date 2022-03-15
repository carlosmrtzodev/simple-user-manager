const List = ({ name, lastname, email }) => {
  return (
    <>
      <li className="font-mono sm:text-lg text-sm text-text">
        <strong className="capitalize">
          {name} {lastname}:
        </strong>{" "}
        {email}
      </li>
    </>
  );
};

export default List;
