import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ name, lastname }) => {
  return (
    <>
      <li>
        <FontAwesomeIcon icon={faCheck} className="icon" />
        {name} {lastname}
      </li>
    </>
  );
};
export default List;
