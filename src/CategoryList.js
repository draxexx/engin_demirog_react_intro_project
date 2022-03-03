import { ListGroup, ListGroupItem } from "reactstrap";
import { useState } from "react";

function CategoryList(props) {

    const[categories, setCategories] = useState([
        {categoryId: 1, categoryName: "Beverages"},
        {categoryId: 2, categoryName: "Condiments"},
    ]);

    return (
        <div>
            <h3>{props.title}</h3>
            <ListGroup>
                {categories.map(category => (
                     <ListGroupItem key={category.categoryId}>
                       {category.categoryName}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default CategoryList;
