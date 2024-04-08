import { useSelector } from "react-redux";
import { IProduct } from "../../../redux/reducers/productsSlice";
import { ProductCart } from "./ProductCart";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors"

export const ListProductsCart = () => {
    const productsInTheCart = useSelector((state: any) => state.ProductSlice);

    return (
        <SectionProductCart>
            {productsInTheCart.productsInTheCart ? (
                productsInTheCart.productsInTheCart.map((product:IProduct) => {
                    return (
                        <>
                        <ProductCart quantity={product.quantity} key={product.name} product={product}/>
                        <LineDivider></LineDivider>
                        </>
                    );
                })
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
        </SectionProductCart>
    );
};

const SectionProductCart = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const LineDivider = styled.div`
    width: 100%;
    height: 0.1rem;
    background: ${color.LightGray};
`