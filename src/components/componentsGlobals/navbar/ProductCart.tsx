import styled from "@emotion/styled";
import {
    IProduct,
    deleteProductInTheCart,
    setDecreaseProduct,
    setIncrementProduct,
} from "../../../redux/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { LM, MM } from "../../../theme/fonts";

export const ProductCart = ({
    product,
    quantity,
}: {
    product: IProduct;
    quantity: number;
}) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteProductInTheCart(product));
    };

    const incrementProduct = () => {
        dispatch(setIncrementProduct(product));
    };

    const decreaseProduct = () => {
        dispatch(setDecreaseProduct(product));
    };

    const quantityProduct =
        parseFloat((product.priceInfo?.currentPrice?.priceString).slice(1, 7)) *
        quantity;

    return (
        <ContainerProductCart>
            <ImgProductCart
                src={product.imageInfo.thumbnailUrl}
                alt={`Imagen de ${product.name}`}
            />
            <TexsProductCart>
                <MM>{product.name}</MM>
                <MM style={{fontWeight:"bold"}}>$ {quantityProduct.toFixed(2)}</MM>
                <button onClick={incrementProduct}>
                    <Icons className="bi bi-plus"></Icons>
                </button>

                <button onClick={decreaseProduct}>
                    <Icons className="bi bi-dash"></Icons>
                </button>

                <button onClick={deleteProduct}>
                    <Icons className="bi bi-dash"></Icons>
                </button>
            </TexsProductCart>
        </ContainerProductCart>
    );
};

const ContainerProductCart = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const ImgProductCart = styled.img`
    width: 9rem;
    padding: 0 10px;
`;
const TexsProductCart = styled.div``;
const Icons = styled.i`
    font-size: 2.1rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;
