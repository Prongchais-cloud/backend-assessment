import { useEffect } from "react";
import UpdateForm from "../components/UpdateForm";
import UpdateProduct from "../components/UpdateProduct";
import { useParams } from "react-router-dom";
import { getProduct } from "../data/fetchData";

export default function Update(){
    const { _id } = useParams();
    const { dataForm, setDataForm, handleUpdate, oneProduct, handleOneProduct } = getProduct();

    useEffect(() => {
        if (_id) handleOneProduct(_id);
    }, [_id]);

    useEffect(() => {
        if (oneProduct && oneProduct._id) {
            setDataForm({
                name: oneProduct.name,
                price: oneProduct.price,
                quantity: oneProduct.quantity,
            });
        }
    }, [oneProduct]);

    return (
        <section className="flex flex-col justify-center text-center p-20 gap-30">
            <UpdateForm _id={_id} dataForm={dataForm} setDataForm={setDataForm} handleUpdate={handleUpdate}/>
            <UpdateProduct oneProduct={oneProduct}/>
        </section>
    );
}