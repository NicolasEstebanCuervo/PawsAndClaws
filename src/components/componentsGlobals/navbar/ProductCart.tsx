import styled from "@emotion/styled";
import {
    IProduct,
    deleteProductInTheCart,
    setDecreaseProduct,
    setIncrementProduct,
} from "../../../redux/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { LM, MM } from "../../../theme/fonts";
import { PopNotification } from "../pop-up/popNotification";
import { PopConfirmation } from "../pop-up/popConfirmation";

export const ProductCart = ({
    product,
    quantity,
}: {
    product: IProduct;
    quantity: number;
}) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteProductInTheCart(product.usItemId));
    };

    const incrementProduct = () => {
        dispatch(setIncrementProduct(product.usItemId));
    };

    const decreaseProduct = () => {
        dispatch(setDecreaseProduct(product.usItemId));
    };

    return (
        <ContainerProductCart>
            <ImgProductCart
                src={product.imageInfo.thumbnailUrl}
                alt={`Imagen de ${product.name}`}
            />
            <div>
                <MM>{product.name}</MM>
                <MM style={{ fontWeight: "bold" }}>
                    $
                    {(
                        (parseFloat(
                            (product.priceInfo?.currentPrice?.priceString).slice(
                                1,
                                7
                            )
                        ) -
                            2) *
                        quantity
                    ).toFixed(2)}
                </MM>

                <button onClick={incrementProduct}>
                    <Icons className="bi bi-plus"></Icons>
                </button>

                <button onClick={decreaseProduct}>
                    <Icons className="bi bi-dash"></Icons>
                </button>

                <PopConfirmation
                    functionActive={deleteProduct}
                    actionComponent={
                        <ButtonDelete>
                            <Icons className="bi bi-x"></Icons>
                        </ButtonDelete>
                    }
                    titleAlert="¿Estas seguro que quieres eliminar este producto de tu carrito?"
                    descriptionAlert="Si eliminas este producto del carrito tendras que volver a agregarlo para poder realizar la compra"
                />
            </div>
        </ContainerProductCart>
    );
};

const ContainerProductCart = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
`;
const ImgProductCart = styled.img`
    width: 9rem;
    padding: 0 10px;
`;

const Icons = styled.i`
    font-size: 2rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;

const ButtonDelete = styled.button`
    position: absolute;
    top: -0.5rem;
    right: -1rem;
    margin-left: 1rem;
`;
