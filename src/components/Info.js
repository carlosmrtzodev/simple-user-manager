import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <>
      <div className="lg:absolute static flex justify-center group items-center gap-2 bottom-4 left-4 lg:my-0 my-4">
        <FontAwesomeIcon
          icon={faGithub}
          className="sm:text-xl text-sm text-text group-hover:text-btn transition-all ease-in-out duration-200"
        />

        <a
          href="https://github.com/carlosmrtzodev"
          target="_blank"
          rel="noreferrer"
          className="font-mono sm:text-lg text-sm text-text group-hover:text-btn transition-all ease-in-out duration-200"
        >
          Designed and Built by: carlosmrtzodev
        </a>
      </div>
    </>
  );
};

export default Info;
