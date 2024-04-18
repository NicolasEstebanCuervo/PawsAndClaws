import styled from "@emotion/styled";
import { Carousel } from "react-bootstrap";
import { XLLM } from "../../../theme/fonts";
import { useSelector } from "react-redux";
import { IProduct } from "../../../redux/reducers/productsSlice";
import { CardProduct } from "../../componentsGlobals/cardProduct";
import * as color from "../../../theme/colors";

export const CarouselProducts = () => {
    const products = useSelector((state: any) => state.ProductSlice);
    const productsMap = products.products[0];

    return (
        <SectionCarouselProducts>
            <Title>Otros productos</Title>
            <CarouselCustom
                indicators={false}
                interval={5000}
                prevIcon={<></>}
                nextIcon={<></>}
            >
                {productsMap &&
                    productsMap.map(
                        (product: IProduct, index: number) =>
                            index % 5 === 0 && (
                                <Carousel.Item
                                    key={index}
                                    style={{ height: 500 }}
                                >
                                    <ContainerProducts>
                                        {productsMap
                                            .slice(index, index + 5)
                                            .map(
                                                (
                                                    product: IProduct,
                                                    subIndex: number
                                                ) => (
                                                    <CardProduct
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
        </SectionCarouselProducts>
    );
};

const SectionCarouselProducts = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
    padding: 5rem 0;
    background: ${color.Cream};
`;

const Title = styled(XLLM)`
    font-weight: bold;
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
`;
