import styled from "@emotion/styled";
import { LM, MM } from "@theme/fonts";
import * as color from "@theme/colors";
import {
    IProduct,
    setProductSelected,
    setProductsInTheCart,
} from "@reducers/productsSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PopNotification } from "../pop-up/popNotification";
import { useState } from "react";

export const StarComponent = ({
    colorStar,
    fontSize,
}: {
    colorStar?: string;
    fontSize?: number;
}) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star
                key={i}
                className="bi bi-star-fill"
                colorStar={colorStar}
                fontSize={fontSize}
            ></Star>
        );
    }
    return stars;
};

export const ProductCard = ({ product }: { product: IProduct }) => {
    const dispatch = useDispatch();
    const [activePop, setActivePop] = useState(false);

    const setProduct = () => {
        dispatch(setProductSelected(product));
    };

    const addInTheCart = () => {
        dispatch(setProductsInTheCart(product));
        setActivePop(true);

        setInterval(() => {
            setActivePop(false);
        }, 100);
    };

    let quantityProduct = 0;

    if (product.priceInfo?.currentPrice?.priceString) {
        quantityProduct = parseFloat(
            product.priceInfo.currentPrice.priceString
        );
    }

    return (
        <Container>
            {product.imageInfo?.thumbnailUrl ? (
                <Image
                    src={product.imageInfo?.thumbnailUrl}
                    alt={`Imagen de ${product.imageInfo?.thumbnailUrl}`}
                />
            ) : (
                <Image
                    src={require("@assets/images//NoProductExist.webp")}
                    alt={`Imagen de no encontrado`}
                />
            )}

            <Texts>
                {product.name ? (
                    <ContainerStars>{StarComponent({})}</ContainerStars>
                ) : (
                    <></>
                )}

                {product.name ? (
                    <Title>{product.name}</Title>
                ) : (
                    <Title>Producto agotado o retirado del mercado</Title>
                )}

                <ContainerPrices>
                    {product.priceInfo?.currentPrice?.priceString && (
                        <div>
                            <PriceTach>${quantityProduct.toFixed(2)}</PriceTach>
                        </div>
                    )}

                    {product.priceInfo?.currentPrice?.priceString ? (
                        <MM>
                            $
                            {(
                                parseFloat(
                                    product.priceInfo?.currentPrice?.priceString
                                ) - 2
                            ).toFixed(2)}
                        </MM>
                    ) : (
                        <MM>Agotado</MM>
                    )}
                </ContainerPrices>
                <ContainerButtons>
                    <LinkAnimal to={`/products/product/${product.usItemId}`}>
                        <Button onClick={setProduct}>Vista rapida</Button>
                    </LinkAnimal>
                    <PopNotification
                        actionComponent={
                            <Cart
                                onClick={addInTheCart}
                                className="bi bi-cart4"
                            ></Cart>
                        }
                        active={activePop}
                        titleAlert="¡Producto agregado al carrito!"
                        descriptionAlert='Este producto se ha agregado al carrito, puedes ver tus productos agendados en el apartado de "Mi carrito"'
                    />
                </ContainerButtons>
            </Texts>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 20rem;
    height: 30rem;
    background: ${color.Beige};
    padding: 1rem;
    border-radius: 0.3rem;

    @media (max-width: 1000px) {
        margin: 0 1rem;
    }
`;
const Image = styled.img`
    width: 18rem;
    height: 15rem;
    border-radius: 0.3rem;
    background: ${color.White};
`;

const Title = styled(LM)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const ContainerPrices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const PriceTach = styled(MM)`
    color: ${color.Red};
    text-decoration-line: line-through;
`;

const ContainerStars = styled.div`
    display: flex;
    gap: 0.2rem;
`;
const Star = styled.i<{ colorStar?: string; fontSize?: number }>`
    color: ${({ colorStar }) => (colorStar ? colorStar : `${color.Yellow}`)};
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1.3rem")};
`;
const LinkAnimal = styled(Link)`
    width: 90%;
`;
const Button = styled.button`
    border: none;
    border-radius: 0.3rem;
    width: 90%;
    height: 3rem;
    background: ${color.Brown};
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 750px) {
        font-size: 1rem;
    }
`;
const Texts = styled.div`
    text-align: center;
`;
const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Cart = styled.i`
    font-size: 3rem;
    color: ${color.Gray};
    :hover {
        cursor: pointer;
    }
`;
