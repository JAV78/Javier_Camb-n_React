import productsCoffe from "../../products";
import Product from "../Card/Card";
import "./styles.css"

function Products() {
    return (
        <div id="container">
            {productsCoffe.map(prod=>(
                <Card key={prod.id} {...prod} />
            ))}
        </div>
    )

}

export default Products