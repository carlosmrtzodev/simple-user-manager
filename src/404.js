import { Link } from "react-router-dom";
import Button from "./components/Elements/Button";
import Container from "./components/Containers/Container";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <>
      <Container>
        <div className="error">
          <h1>404: This page could not be found</h1>

          <Link to="/" className="text-center">
            <Button>
              <FontAwesomeIcon icon={faArrowLeft} className="icon-alt" />
              Go Back
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default NotFound;
