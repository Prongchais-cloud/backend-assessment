export default function NewProduct({ dataForm, setDataForm, handleCreate }) {
    const onSubmit = (e) => {
        handleCreate(e);
    };
    return (
        <section className="flex flex-col gap-10">
            <h3 className="text-2xl">Add new product</h3>
            <form className="flex gap-20 justify-center" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={dataForm.name}
                    onChange={(e) =>
                        setDataForm({ ...dataForm, name: e.target.value })
                    }
                    className="border rounded-2xl px-5 py-2"
                />
                <input
                    type="number"
                    min="0"
                    placeholder="Price"
                    value={dataForm.price}
                    onChange={(e) =>
                        setDataForm({ ...dataForm, price: e.target.value })
                    }
                    className="border rounded-2xl px-5 py-2"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={dataForm.quantity}
                    onChange={(e) =>
                        setDataForm({ ...dataForm, quantity: e.target.value })
                    }
                    className="border rounded-2xl px-5 py-2"
                />
                <button
                    type="submit"
                    className="rounded-2xl px-5 py-2 bg-red-600 text-white"
                >
                    Save
                </button>
            </form>
        </section>
    );
}
