import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <header className="sticky-top">
        <NavBar></NavBar>
      </header>
      <main>
        <Home></Home>
      </main>
      <footer className="bg-dark text-light text-center">
        <p>footrer</p>
      </footer>
    </>
  );
}

export default App;
