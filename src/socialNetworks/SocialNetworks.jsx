import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialNetworks = () => {
  return (
    <section>
      <Link to="https://github.com/FelixLamas" target="_blanck">
        <FaGithubAlt className="fs-1 mx-2" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/felix-eloy-lamas-b97038260/"
        target="_blanck"
      >
        <FaLinkedin className="fs-1 mx-2" />
      </Link>
    </section>
  );
};

export default SocialNetworks;
