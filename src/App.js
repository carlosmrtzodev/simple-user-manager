import { useState } from "react";
import List from "./components/List";
import Card from "./components/Card";
import UserForm from "./components/UserForm";
import Container from "./components/Container";
import Info from "./components/Info";

function App() {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Container>
        <Card>
          <h1 className="font-sans font-bold sm:text-3xl text-xl text-center text-text">
            User Manager App
          </h1>

          <UserForm submit={submit} />
        </Card>

        <Card>
          <h2 className="font-sans font-bold sm:text-2xl text-xl text-text underline">
            User Manager List:
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
      </Container>
      <Info />
    </>
  );
}

export default App;
