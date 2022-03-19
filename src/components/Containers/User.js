import Card from "./Card";
import { useState } from "react";
import UserForm from "./UserForm";
import List from "../Elements/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faUser } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Card>
        <h1>
          <FontAwesomeIcon icon={faUser} className="icon" />
          User
        </h1>

        <UserForm submit={submit} />
      </Card>

      <div className="list">
        <Card>
          <h2>
            <FontAwesomeIcon icon={faList} className="icon" /> List:
          </h2>

          <ul>
            {users.map((x) => (
              <List
                key={`${x.email}`}
                name={`${x.name}`}
                lastname={`${x.lastname}`}
                email={`${x.email}`}
              />
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
};
export default User;
