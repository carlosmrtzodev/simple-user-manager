import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ name, lastname, email }) => {
  return (
    <>
      <li className="font-mono sm:text-lg text-sm text-text">
        <FontAwesomeIcon icon={faCheck} className="mr-2" />
        <strong className="capitalize">
          {name} {lastname}:
        </strong>{" "}
        {email}
      </li>
    </>
  );
};

export default List;
