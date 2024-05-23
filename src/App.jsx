import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header className="">
        <NavBar></NavBar>
      </header>
      <main></main>
      <footer className="bg-dark text-light text-center">
        <p>footrer</p>
      </footer>
    </>
  );
}

export default App;
