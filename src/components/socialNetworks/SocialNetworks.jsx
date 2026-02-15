import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbFileCv } from "react-icons/tb";
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
      <Link to="/Felix-Eloy-Lamas-Data-Engineer-CV.pdf" target="_blanck">
        <TbFileCv className="fs-1 mx-3 mx-lg-1 social-icons git-hub-icon" />
      </Link>
    </section>
  );
};

export default SocialNetworks;
