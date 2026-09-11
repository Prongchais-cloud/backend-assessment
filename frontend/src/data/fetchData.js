import { useState, useEffect } from "react";

const api = import.meta.env.VITE_API_URL;

export function getProduct() {
    const [product, setProduct] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
    const [dataForm, setDataForm] = useState({
        name: "",
        price: "",
        quantity: "",
    });

    async function fetchProduct() {
        try {
            const res = await fetch(api);
            if (!res.ok) {
                return console.error("API issue!!");
            }
            const productData = await res.json();
            setProduct(productData);
        } catch (err) {
            console.error("Can't fetch product!!", err.message);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!dataForm.name || !dataForm.price) return;

        const payload = { ...dataForm };
        if (!payload.quantity) delete payload.quantity;

        try {
            const res = await fetch(api, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                return console.error("API issue!!");
            }

            fetchProduct();
        } catch (error) {
            console.error("Can't create new product!!", error);
        }
    };

    const handleDelete = async (_id) => {
        try {
            const res = await fetch(`${api}/${_id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                fetchProduct();
            }
        } catch (error) {
            console.error("Can't delete user!!", error);
        }
    };

    const handleUpdate = async (_id) => {
        if (!dataForm.name || !dataForm.price) return;

        const payload = { ...dataForm };

        try {
            const res = await fetch(`${api}/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                return console.error("API issue!!");
            }

            fetchProduct();
        } catch (error) {
            console.error("Can't update product!!", error);
        }
    };

    const handleOneProduct = async (_id) => {
        try {
            const res = await fetch(`${api}/${_id}`);

            if (!res.ok) {
                return console.error("API issue!!");
            }

            const singleProduct = await res.json();

            setOneProduct(singleProduct);
        } catch (error) {
            console.error("Can't get product!!", error);
        }
    };

    return {
        product,
        dataForm,
        setDataForm,
        handleCreate,
        handleDelete,
        handleUpdate,
        oneProduct,
        handleOneProduct,
    };
}
