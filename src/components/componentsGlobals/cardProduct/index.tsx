import styled from "@emotion/styled";
import { LM, MM } from "../../../theme/fonts";
import * as color from "../../../theme/colors";
import {
    IProduct,
    setProductSelected,
    setProductsInTheCart,
} from "../../../redux/reducers/productsSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const CardProduct = ({ product }: { product: IProduct }) => {
    const [numberRandom, setNumberRandom] = useState(1);

    useEffect(() => {
        setNumberRandom(Math.floor(Math.random() * 2 + 4));
    }, []);

    const StarComponent = () => {
        const stars = [];
        for (let i = 0; i < numberRandom; i++) {
            stars.push(<Star key={i} className="bi bi-star-fill"></Star>);
        }
        return stars;
    };

    const dispatch = useDispatch();

    const setProduct = () => {
        dispatch(setProductSelected(product));
    };

    const addInTheCart = () => {
        dispatch(setProductsInTheCart(product));
    };

    const quantityProduct = parseFloat((product.priceInfo?.currentPrice?.priceString).slice(1,7)) ;

    return (
        <SectionCardProduct>
            {product.imageInfo?.thumbnailUrl ? (
                <ImgProduct
                    src={product.imageInfo?.thumbnailUrl}
                    alt={`Imagen de ${product.imageInfo?.thumbnailUrl}`}
                />
            ) : (
                <ImgProduct
                    src={require("../../../assets/images/NoProductExists.webp")}
                    alt={`Imagen de no encontrado`}
                />
            )}

            <TextsProduct>
                {product.name ? (
                    <ContainerStars>{StarComponent()}</ContainerStars>
                ) : (
                    <></>
                )}

                {product.name ? (
                    <TitleProduct>{product.name}</TitleProduct>
                ) : (
                    <TitleProduct>
                        Producto agotado o retirado del mercado
                    </TitleProduct>
                )}

                <ContainerPrices>
                    {product.priceInfo?.currentPrice?.priceString && (
                        <div>
                            <TextTach>
                                $
                                {quantityProduct.toFixed(2)}
                            </TextTach>
                        </div>
                    )}

                    {product.priceInfo?.currentPrice?.priceString ? (
                        <MM>
                            $
                            {(parseFloat(
                                (product.priceInfo?.currentPrice?.priceString).slice(
                                    1,
                                    7
                                )
                            ) - 2).toFixed(2)}
                        </MM>
                    ) : (
                        <MM>Agotado</MM>
                    )}
                </ContainerPrices>
                <ContainerButtons>
                    <LinkAnimal to={`/products/${product.usItemId}`}>
                        <Button onClick={setProduct}>Vista rapida</Button>
                    </LinkAnimal>
                    <Cart onClick={addInTheCart} className="bi bi-cart4"></Cart>
                </ContainerButtons>
            </TextsProduct>
        </SectionCardProduct>
    );
};

const SectionCardProduct = styled.div`
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
`;
const ImgProduct = styled.img`
    width: 18rem;
    height: 15rem;
    border-radius: 0.3rem;
    background: ${color.White};
`;

const TitleProduct = styled(LM)`
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

const TextTach = styled(MM)`
    color: ${color.Red};
    text-decoration-line: line-through;
`;

const ContainerStars = styled.div`
    display: flex;
    gap: 0.2rem;
`;
const Star = styled.i`
    color: #f1c40f;
    font-size: 1.3rem;
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
`;
const TextsProduct = styled.div`
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
