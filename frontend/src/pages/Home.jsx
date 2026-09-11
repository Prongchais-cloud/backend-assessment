import ProductTable from "../components/ProductTable";
import { getProduct } from "../data/fetchData";
import NewProduct from "../components/NewProductForm";

export default function Home(){
    const {product, dataForm, setDataForm, handleCreate, handleDelete} = getProduct();
    return (
        <div className="flex flex-col text-center gap-20 p-20">
            <h1 className="text-6xl">HOME Page</h1>
            <NewProduct dataForm={dataForm} setDataForm={setDataForm} handleCreate={handleCreate}/>
            <ProductTable product={product} handleDelete={handleDelete}/>
        </div>
    );
}