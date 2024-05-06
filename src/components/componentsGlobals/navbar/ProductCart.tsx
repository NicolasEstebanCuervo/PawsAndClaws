import styled from "@emotion/styled";
import {
    IProduct,
    deleteProductInTheCart,
    setDecreaseProduct,
    setIncrementProduct,
} from "@reducers/productsSlice";
import { useDispatch } from "react-redux";
import { MM } from "@theme/fonts";
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
        <Container>
            <Image
                src={product.imageInfo.thumbnailUrl}
                alt={`Imagen de ${product.name}`}
            />
            <div>
                <MM>{product.name}</MM>
                <MM style={{ fontWeight: "bold" }}>
                    $
                    {(
                        (parseFloat(
                            product.priceInfo?.currentPrice?.priceString
                        ) -
                            2) *
                        quantity
                    ).toFixed(2)}
                </MM>

                <button onClick={incrementProduct}>
                    <Icon className="bi bi-plus"></Icon>
                </button>

                <button onClick={decreaseProduct}>
                    <Icon className="bi bi-dash"></Icon>
                </button>

                <PopConfirmation
                    functionActive={deleteProduct}
                    actionComponent={
                        <ButtonDelete>
                            <IconTrash className="bi bi-trash"></IconTrash>
                        </ButtonDelete>
                    }
                    titleAlert="¿Estas seguro que quieres eliminar este producto de tu carrito?"
                    descriptionAlert="Si eliminas este producto del carrito tendras que volver a agregarlo para poder realizar la compra"
                />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
`;
const Image = styled.img`
    width: 9rem;
    padding: 0 10px;
`;

const Icon = styled.i`
    font-size: 2rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;

const IconTrash = styled.i`
    font-size: 1.7rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.6;
    }
`;

const ButtonDelete = styled.button`
    position: absolute;
    top: -0.5rem;
    right: -1rem;
    margin-left: 1rem;
`;
