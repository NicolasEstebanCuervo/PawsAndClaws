import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { MM, SM, SMM, XLLM, XLM } from "@theme/fonts";
import { StarComponent } from "../../componentsGlobals/cardProduct";
import {
    IProduct,
    setProductsInTheCart,
} from "@reducers/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PopNotification } from "../../componentsGlobals/pop-up/popNotification";

export const PayOrAddToCart = ({ product }: { product: IProduct }) => {
    const quantityProduct = parseFloat(
        (product.priceInfo?.currentPrice?.priceString)
    );

    const [numberRandom, setNumberRandom] = useState(1);
    const [activePop, setActivePop] = useState(false);

    useEffect(() => {
        setNumberRandom(Math.floor(Math.random() * 98 + 2));
    }, []);

    const dispatch = useDispatch();

    const addInTheCart = () => {
        dispatch(setProductsInTheCart(product));
        setActivePop(true);

        setInterval(() => {
            setActivePop(false);
        }, 100);
    };

    return (
        <Container data-testid="container">
            <div>
                <XLLM>{product.name.substring(0, 59)}...</XLLM>
                <ContainerStars>{StarComponent({})}</ContainerStars>
            </div>
            <ContainerPrices>
                {product.priceInfo?.currentPrice?.priceString ? (
                    <div>
                        <Price>
                            {" "}
                            $
                            {(
                                parseFloat(
                                    (product.priceInfo?.currentPrice?.priceString)) - 2
                            ).toFixed(2)}
                        </Price>
                    </div>
                ) : (
                    <XLM>Agotado</XLM>
                )}
                <SubTexts>
                    <SMM>En cada</SMM>{" "}
                    <MM colorText={color.TextBrown}>
                        ${(quantityProduct / 12).toFixed(2)} cuota durante 12
                        meses
                    </MM>
                </SubTexts>
            </ContainerPrices>

            <ContainerIndividual>
                <Icon className="bi bi-truck"></Icon>
                <TextsIndividual>
                    <MM>Envio nacional</MM>
                    <SM>Envios totalmente gratis para todo el país</SM>
                </TextsIndividual>
            </ContainerIndividual>

            <ContainerIndividual gap={0.5}>
                <MM>Disponibles:</MM>
                <MM>{numberRandom} unidades</MM>
            </ContainerIndividual>

            <ContainerButtons>
                <SubContainerButtons>
                    <PopNotification
                        actionComponent={
                            <Button onClick={addInTheCart} data-testid="add-cart-button">
                                Agregar al carrito
                            </Button>
                        }
                        active={activePop}
                        width="100%"
                        titleAlert="¡Producto agregado al carrito!"
                        descriptionAlert='Este producto se ha agregado al carrito, puedes ver tus productos agendados en el apartado de "Mi carrito"'
                    />

                    <LinkProduct to="/products/product/pay">
                        <Button onClick={addInTheCart} data-testid="buy-button">Comprar ahora</Button>
                    </LinkProduct>
                </SubContainerButtons>
                <TextsContainerButtons>
                    <ContainerIndividual gap={0.2}>
                        <SM>Distribuido por:</SM>
                        <Bold colorText={color.TextBrown}>Walmart</Bold>
                    </ContainerIndividual>
                    <Bold>+1000 ventas</Bold>
                </TextsContainerButtons>
            </ContainerButtons>

            <ContainerIndividual>
                <IconSmall className="bi bi-arrow-return-left"></IconSmall>
                <TextsIndividual>
                    <MM>Devolución gratis</MM>
                    <SM colorText={color.LightGray2}>
                        Tienes 30 días desde que lo recibes.
                    </SM>
                </TextsIndividual>
            </ContainerIndividual>

            <ContainerIndividual>
                <IconSmall className="bi bi-shield-check"></IconSmall>
                <TextsIndividual>
                    <MM>Compra Protegida</MM>
                    <SM colorText={color.LightGray2}>
                        Recibe el producto que esperabas o te devolvemos tu
                        dinero.
                    </SM>
                </TextsIndividual>
            </ContainerIndividual>

            <ContainerIndividual>
                <IconSmall className="bi bi-calendar2-date-fill"></IconSmall>
                <TextsIndividual>
                    <MM>Garantía</MM>
                    <SM colorText={color.LightGray2}>
                        15 días de garantía de fábrica.
                    </SM>
                </TextsIndividual>
            </ContainerIndividual>
        </Container>
    );
};

const Container = styled.section`
    border: 1px solid ${color.LightGray};
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 2rem;
    gap: 1rem;
    border-radius: 0.3rem;

    @media (max-width: 1250px) {
        width: 80%;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;

const ContainerStars = styled.div`
    display: flex;
    gap: 0.2rem;
`;

const SubTexts = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const ContainerPrices = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerIndividual = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ gap }: { gap?: number }) => (gap ? `${gap}rem` : "1rem")};
`;

const Icon = styled.i`
    font-size: 2.5rem;
    color: ${color.LightGray2};
`;

const IconSmall = styled.i`
    font-size: 1.9rem;
    color: ${color.LightGray2};
`;

const TextsIndividual = styled.div`
    display: flex;
    flex-direction: column;
`;

const Price = styled(XLLM)`
    font-weight: 200;
`;

const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.4rem;
`;

const SubContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
`;

const Button = styled.button`
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    height: 3.5rem;
    font-size: 1.1rem;
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

const LinkProduct = styled(Link)`
    width: 100%;
`;

const TextsContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
`;

const Bold = styled(SM)`
    font-weight: bold;
`;
