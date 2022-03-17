import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ name, lastname }) => {
  return (
    <>
      <li className="capitalize text-light">
        <FontAwesomeIcon icon={faCheck} className="mr-2 text-theme" />
        {name} {lastname}
      </li>
    </>
  );
};

export default List;
