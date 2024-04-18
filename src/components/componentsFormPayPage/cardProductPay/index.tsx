import styled from "@emotion/styled";
import {
    IProduct,
    deleteProductInTheCart,
    setDecreaseProduct,
    setIncrementProduct,
} from "../../../redux/reducers/productsSlice";
import { LM, MM, SM } from "../../../theme/fonts";
import * as color from "../../../theme/colors";

export const CardProductPay = ({
    product,
    quantity,
}: {
    product: IProduct;
    quantity: number;
}) => {


    return (
        <ContainerProductCart>
            <ImgProductCart
                src={product.imageInfo.thumbnailUrl}
                alt={`Imagen de ${product.name}`}
            />
            <TextsProduct>
                <NameProduct>{product.name}</NameProduct>
                <MM>
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

            </TextsProduct>
        </ContainerProductCart>
    );
};

const ContainerProductCart = styled.div`
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

const ImgProductCart = styled.img`
    width: 10rem;
    padding: 0 10px;
    background: ${color.White};
`;

const TextsProduct = styled.div`
    display: flex;
    flex-direction: column;
`

const NameProduct = styled(MM)`
    font-weight: bold;
    max-width: 90%;
`;

const IncrementIcon = styled.i`
    font-size: 2.1rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;

const DecreaseIcon = styled.i`
    font-size: 2.5rem;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.5;
    }
`;

const DeleteteIcon = styled.i`
font-size: 2.1rem;
cursor: pointer;
transition: opacity 0.2s ease-in-out;
&:hover {
    opacity: 0.5;
}
`;

const ContainerQuantity = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

const ButtonDelete = styled.button`
    position: absolute;
    top: -0.5rem;
    right: 0;
    margin-left: 1rem;
`;
