import { Link } from "react-router-dom";

export default function ProductTable({ product, handleDelete }) {
    return (
        <table className="w-full border-collapse table-fixed">
            <thead>
                <tr>
                    <th className="border bg-gray-300 p-2">NAME</th>
                    <th className="border bg-gray-300 p-2">PRICE</th>
                    <th className="border bg-gray-300 p-2">QUANTITY</th>
                    <th className="border bg-gray-300 p-2">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item) => (
                    <tr key={item._id}>
                        <td className="border p-2 align-middle">{item.name}</td>
                        <td className="border p-2 align-middle">
                            {item.price}
                        </td>
                        <td className="border p-2 align-middle">
                            {item.quantity}
                        </td>
                        <td className="border p-2 align-middle">
                            <div className="flex items-center justify-center gap-2">
                                <button onClick={() => handleDelete(item._id)} className="px-3 py-1 bg-red-500 text-white rounded-2xl hover:bg-red-600">
                                    DELETE
                                </button>
                                <Link className="px-3 py-1 bg-red-500 text-white rounded-2xl hover:bg-red-600" to={`/update/${item._id}`}>UPDATE</Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
