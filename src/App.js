import "./App.css";
import Product from "./components/Product/Product";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <main className="py-3">
      <Container>
        <Product />
      </Container>
    </main>
  );
};
export default App;
