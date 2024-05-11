import styled from "@emotion/styled";
import {
    IProduct,
    deleteProductInTheCart,
    setDecreaseProduct,
    setIncrementProduct,
} from "@reducers/productsSlice";
import { MM } from "@theme/fonts";
import * as color from "@theme/colors";
import { PopConfirmation } from "../../componentsGlobals/pop-up/popConfirmation";
import { useDispatch } from "react-redux";

export const CardProductPay = ({
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

    return (
        <Container data-testid="container">
            <Image
                src={product.imageInfo.thumbnailUrl}
                alt={`Imagen de ${product.name}`}
            />
            <Texts>
                <Name>{product.name}</Name>
                <MM>
                    $
                    {(
                        (parseFloat(
                            product.priceInfo?.currentPrice?.priceString
                        ) -
                            2) *
                        quantity
                    ).toFixed(2)}
                </MM>

                <PopConfirmation
                    functionActive={deleteProduct}
                    actionComponent={
                        <Button data-testid="button">
                            <IconTrash className="bi bi-trash"></IconTrash>
                        </Button>
                    }
                    titleAlert="¿Estas seguro que quieres eliminar este producto de tu carrito?"
                    descriptionAlert="Si eliminas este producto del carrito tendras que volver a agregarlo para poder realizar la compra"
                />
            </Texts>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    width: 100%;
    max-width: 50rem;
    position: relative;
    background: ${color.Cream};
    border-radius: 0.3rem;
    padding: 1rem;
    border: 1px solid ${color.LightGray};
`;

const Image = styled.img`
    width: 10rem;
    padding: 0 10px;
    background: ${color.White};
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled(MM)`
    font-weight: bold;
    max-width: 90%;
`;

const IconTrash = styled.i`
    font-size: 1.7rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.6;
    }
`;

const Button = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;
