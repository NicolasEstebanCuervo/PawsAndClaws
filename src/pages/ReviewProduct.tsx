import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { NavBar } from "@components/componentsGlobals/navbar";
import { ProductInformation } from "@components/reviewProductPage/productInformation";
import { PayOrAddToCart } from "@components/reviewProductPage/payOrAddToCard";
import { CommentsSection } from "@components/reviewProductPage/commentsSection";
import { Footer } from "@components/componentsGlobals/footer";
import { useSelector } from "react-redux";

export const ReviewProduct= () => {

    const productSlice = useSelector(
        (state: any) => state.ProductSlice
    );

    return (
        <ContainerPage>
            <NavBar />
            <Container>
                <ProductInformation />
                <LineDivider></LineDivider>
                <PayOrAddToCart product={productSlice.productSelected}/>
            </Container>
            <CommentsSection />
            <Footer />
        </ContainerPage>
    );
};

const ContainerPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    min-height: 100vh;
    background: ${color.White};
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;
    
    @media (max-width: 1250px) {
        flex-direction: column;
        width: 95%;
    }

    @media (max-width: 750px) {
        width: 95%;
    }
`;

const LineDivider = styled.div`
    display: none;

    @media (max-width: 1250px) {
        display: block;
        width: 100%;
        height: 0.1rem;
        background: ${color.LightGray};
    }
`;