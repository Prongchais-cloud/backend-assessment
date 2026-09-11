import ProductTable from "../components/ProductTable";
import { getProduct } from "../data/fetchData";
import NewProduct from "../components/NewProductForm";

export default function Home(){
    const {product, loading, dataForm, setDataForm, handleCreate, handleDelete} = getProduct();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">Loading products...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col text-center gap-20 p-20">
            <h1 className="text-6xl">HOME Page</h1>
            <NewProduct dataForm={dataForm} setDataForm={setDataForm} handleCreate={handleCreate}/>
            <ProductTable product={product} handleDelete={handleDelete}/>
        </div>
    );
}