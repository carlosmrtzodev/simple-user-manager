import { useState } from "react";
import Info from "./components/Elements/Info";
import List from "./components/Elements/List";
import Card from "./components/Containers/Card";
import UserForm from "./components/Containers/UserForm";
import Container from "./components/Containers/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Container>
        <Card>
          <h1>
            <FontAwesomeIcon icon={faUser} className="mr-2 text-theme" />
            User
          </h1>

          <UserForm submit={submit} />
        </Card>

        <div className="flex flex-col w-full gap-4">
          <Card>
            <h2>
              <FontAwesomeIcon icon={faList} className="mr-2 text-theme" />{" "}
              List:
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
          <Info />
        </div>
      </Container>
    </>
  );
}

export default App;
