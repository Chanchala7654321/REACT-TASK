import "./Card.css";

function Card({ product, addToCart }) {
    return (
        <div className="container">
            <div className="cards">
                <h2>
                    {product.name} - ${product.price}
                </h2>

                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Card;