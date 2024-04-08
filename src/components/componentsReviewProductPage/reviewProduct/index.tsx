import { useSelector } from "react-redux";
import { IProduct } from "../../../redux/reducers/productsSlice";
import { CardProduct } from "../../componentsGlobals/cardProduct";

export const ReviewProduct = () => {
    const productSelected = useSelector((state: any) => state.ProductSlice);

    return <>
        {productSelected.productSelected.map((product:IProduct)=>(
            <CardProduct product={product} key={product.name} />
        ))}
    </>;
};
