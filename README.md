# Getting Started with Create React App

To create a react app `npx create-react-app app_name`

To run the project `npm start`

## Components

`Navi` class extends `Component`

`export` means this class is public

```js
export default class Navi extends Component{
    render(){
        return(
            <div></div>
        );
    }
}
```
To call the components from the other components, we should import them.

```js
import Navi from "./Navi";

function App() {
  return (
    <div>
      <Navi></Navi>
    </div>
  );
}
```

## Working With ReactStrap

ReactStrap website [ReactStrap](https://reactstrap.github.io/).

To add ReactStrap into the project `npm install reactstrap`

You can check your libraries in the `package.json`

Also you can check your installed libraries in the `node_modules` folder

```js
"dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "reactstrap": "^9.0.1",
    "web-vitals": "^2.1.4"
  },
```

To use `ReactStrap` components, you should import them.

```js
import { Container } from "reactstrap";
```

To install bootstrap

```js
npm install bootstrap
```

To use bootstrap, import it in the `index.js`

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

Bootstrap divides screen into 12 pieces. With `<Col xs="3">` we take 3 space of the 12.

```js
<Row>
          <Col xs="3">
            <CategoryList></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList></ProductList>
          </Col>
        </Row>
```

## Working With Props

We can pass `props` by defining any name.

```js
<ProductList title="Product List"></ProductList>
```

We can get props like in the example down below.

```js
function ProductList(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}
```

## Working With State

Defining the state variable

```js
const[counter, setCounter] = useState(0);
```

```js
const[categories, setCategories] = useState([
        {categoryId: 1, categoryName: "Beverages"},
        {categoryId: 2, categoryName: "Condiments"},
    ]);
```

## Working With Events


