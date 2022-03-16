import Card from "./components/Card";
import Container from "./components/Container";
import { Link } from "react-router-dom";
import Button from "./components/Button";

const NotFound = () => {
  return (
    <>
      <Container>
        <Card>
          <h1 className="font-sans font-bold sm:text-xl text-lg text-center text-text">
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
