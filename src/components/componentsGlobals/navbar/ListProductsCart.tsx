import { useDispatch, useSelector } from "react-redux";
import { IProduct, setTotalPrice } from "../../../redux/reducers/productsSlice";
import { ProductCart } from "./ProductCart";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";

export const ListProductsCart = () => {
    const productSlice = useSelector((state: any) => state.ProductSlice);
    const dispatch = useDispatch();
    let totalPrice = 0;

    productSlice.productsInTheCart.forEach((product: IProduct) => {
        const price =
            parseFloat(
                (product.priceInfo?.currentPrice?.priceString).slice(1, 7)
            ) - 2;
        totalPrice += price * product.quantity;
    });

    dispatch(setTotalPrice(totalPrice));

    return (
        <Section>
            {productSlice.productsInTheCart.length > 0 ? (
                productSlice.productsInTheCart.map((product: IProduct) => {
                    return (
                        <ContainerProduct key={product.usItemId}>
                            <ProductCart
                                quantity={product.quantity}
                                product={product}
                            />
                            <LineDivider></LineDivider>
                        </ContainerProduct>
                    );
                })
            ) : (
                <></>
            )}
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LineDivider = styled.div`
    width: 100%;
    height: 0.1rem;
    background: ${color.LightGray};
`;

const ContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
