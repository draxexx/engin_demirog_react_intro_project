import Navi from "./Navi";
import CategoryList from "./CategoryList"
import ProductList from "./ProductList"
import { Container, Row, Col } from "reactstrap";

function App() {

  let categoryTitle = "Category List";
  let productTitle = "Product List";

  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={categoryTitle}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title={productTitle}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;