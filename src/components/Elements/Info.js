import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <>
      <div className="flex justify-center items-center group animate-fade gap-2">
        <a
          href="https://github.com/carlosmrtzodev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-dark group-hover:text-theme transition-all ease-in-out duration-200"
        >
          carlosmrtzodev
          <FontAwesomeIcon icon={faGithub} className="ml-2" />
        </a>
      </div>
    </>
  );
};

export default Info;
