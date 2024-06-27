import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import("../../App.css");

const SocialNetworks = () => {
  return (
    <section>
      <Link to="https://github.com/FelixLamas" target="_blanck">
        <FaGithubAlt className="fs-1 mx-4 mx-lg-2 social-icons git-hub-icon " />
      </Link>
      <Link
        to="https://www.linkedin.com/in/felix-eloy-lamas-b97038260/"
        target="_blanck"
      >
        <FaLinkedin className="fs-1 mx-4 mx-lg-2 social-icons linkedin-icon" />
      </Link>
    </section>
  );
};

export default SocialNetworks;
