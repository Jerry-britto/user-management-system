import Container from "./components/Container/Container";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <Filter />
        <Container />
      </div>
      <Page />
    </>
  );
}

export default App;
