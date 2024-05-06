import styled from "@emotion/styled";
import { ProductCard } from "../../../componentsGlobals/cardProduct";
import { useSelector } from "react-redux";
import { IProduct } from "@reducers/productsSlice";

export const ListProductsStore = ({
    indexArray1,
    indexArray2,
}: {
    indexArray1: number;
    indexArray2: number;
}) => {
    const productSlice = useSelector((state: any) => state.ProductSlice)

    return (
        <Container>
            <SubContainer>
                {productSlice.products &&
                    productSlice.products
                        .slice(indexArray1, indexArray2)
                        .map((product: IProduct, index: number) => (
                            <ProductCard product={product} key={index} />
                        ))}
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 0.5rem;
`;

const SubContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(4, auto);
    width: 100%;
    max-width: 1600px;
    gap: 1rem;

    @media (max-width: 1600px) {
        grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, auto);
        width: 80%;
    }

    @media (max-width: 750px) {
        width: 100%;
        grid-template-columns: repeat(1, auto);
    }

    @media (max-width: 550px) {
        width: 85%;
    }
`;
