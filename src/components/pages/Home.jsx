import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";
import Technologies from "../technologies/Technologies";

const Home = () => {
  return (
    <section>
      <AboutMe />
      <Technologies />
      <Projects />
    </section>
  );
};

export default Home;
