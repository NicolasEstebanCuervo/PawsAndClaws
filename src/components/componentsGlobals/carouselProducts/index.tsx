import styled from "@emotion/styled";
import { Carousel } from "react-bootstrap";
import { XLLM } from "@theme/fonts";
import { useSelector } from "react-redux";
import { IProduct } from "@reducers/productsSlice";
import { ProductCard } from "../cardProduct";
import * as color from "@theme/colors";
import { useEffect, useState } from "react";

export const CarouselProducts = ({ title }: { title: string }) => {
    const productSlice = useSelector((state: any) => state.ProductSlice);
    const [viewport, setViewport] = useState(5);

    useEffect(() => {
        const calculateWidth = () => {
            if (window.screen.availWidth > 1750) {
                setViewport(5);
            } else if (
                window.screen.availWidth <= 1750 &&
                window.screen.availWidth >= 1450
            ) {
                setViewport(4);
            } else if (
                window.screen.availWidth <= 1450 &&
                window.screen.availWidth >= 950
            ) {
                setViewport(3);
            } else if (
                window.screen.availWidth <= 950 &&
                window.screen.availWidth >= 550
            ) {
                setViewport(2);
            } else {
                setViewport(1);
            }
        };

        calculateWidth();
    }, []);

    return (
        <Container>
            <Title>{title}</Title>
            <CarouselCustom indicators={false} interval={4000}>
                {productSlice.products &&
                    productSlice.products.map(
                        (product: IProduct, index: number) =>
                            index % 5 === 0 && (
                                <Carousel.Item
                                    key={index}
                                    style={{ height: 500 }}
                                >
                                    <ContainerProducts>
                                        {productSlice.products
                                            .slice(index, index + viewport)
                                            .map(
                                                (
                                                    product: IProduct,
                                                    subIndex: number
                                                ) => (
                                                    <ProductCard
                                                        key={index + subIndex}
                                                        product={product}
                                                    />
                                                )
                                            )}
                                    </ContainerProducts>
                                </Carousel.Item>
                            )
                    )}
            </CarouselCustom>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
    padding: 5rem 0;
    background: ${color.Cream};

    .carousel-control-next:focus,
    .carousel-control-next:hover,
    .carousel-control-prev:focus,
    .carousel-control-prev:hover {
        display: none;
    }

    .carousel-control-prev,
    .carousel-control-next {
        display: none;
    }
`;

const Title = styled(XLLM)`
    font-weight: bold;
    text-align: center;
`;

const CarouselCustom = styled(Carousel)`
    height: 35rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
        gap: 0rem;
    }
`;
