import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Foot from "./components/footer/Foot";

function App() {
  return (
    <>
      <header className="sticky-top">
        <NavBar></NavBar>
      </header>
      <main>
        <Home></Home>
      </main>
      <footer className="bg-dark text-light text-center pb-1">
        <Foot />
      </footer>
    </>
  );
}

export default App;
