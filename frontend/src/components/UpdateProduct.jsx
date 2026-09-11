export default function UpdateProduct({ oneProduct }) {
    if (!oneProduct || !oneProduct._id) return null;

    return (
        <section>
            <div>
                <h4>Product name: {oneProduct.name}</h4>
                <h4>Product price: {oneProduct.price}</h4>
                <h4>Product quantity: {oneProduct.quantity}</h4>
            </div>
        </section>
    );
}