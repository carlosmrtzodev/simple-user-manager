import { Link } from "react-router-dom";
import Card from "./components/Containers/Card";
import Button from "./components/Elements/Button";
import Container from "./components/Containers/Container";

const NotFound = () => {
  return (
    <>
      <Container>
        <Card>
          <h1 className="font-bold text-light text-center">
            404: This page could not be found
          </h1>

          <Link to="/" className="text-center">
            <Button>Go Back</Button>
          </Link>
        </Card>
      </Container>
    </>
  );
};

export default NotFound;
