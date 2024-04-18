import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { ProductInformation } from "../components/componentsReviewProductPage/productInformation";
import { PayOrAddToCart } from "../components/componentsReviewProductPage/payOrAddToCard";
import { useSelector } from "react-redux";
import { SectionComments } from "../components/componentsReviewProductPage/commentsSection";

export const ReviewProductPage = () => {

    const productSelected = useSelector(
        (state: any) => state.ProductSlice.productSelected
    );

    const productSelectedInfo = productSelected[0]

    return (
        <ContainerPage>
            <NavBar />
            <ContainerProductInformation>
                <ProductInformation />
                <PayOrAddToCart product={productSelectedInfo}/>
            </ContainerProductInformation>
            <SectionComments />
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


const ContainerProductInformation = styled.div`
    display: flex;
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;
`;
