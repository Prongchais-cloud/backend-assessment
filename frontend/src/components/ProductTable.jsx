export default function ProductTable({ product, handleDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="border bg-gray-300">NAME</th>
                    <th className="border bg-gray-300">PRICE</th>
                    <th className="border bg-gray-300">QUANTITY</th>
                    <th className="border bg-gray-300">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item) => (
                    <tr key={item._id}>
                        <td className="border">{item.name}</td>
                        <td className="border">{item.price}</td>
                        <td className="border">{item.quantity}</td>
                        <td className="border">
                            <button onClick={() => handleDelete(item._id)}>
                                DELETE
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
