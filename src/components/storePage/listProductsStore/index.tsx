import styled from "@emotion/styled";
import { ProductCard } from "../../componentsGlobals/productCard";
import { useSelector } from "react-redux";
import { IProduct } from "../../../redux/reducers/productsSlice";

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    gap: 3rem;
    padding: 3rem 0;
`;
const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`;
