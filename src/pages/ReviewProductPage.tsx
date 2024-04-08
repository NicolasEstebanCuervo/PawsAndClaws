import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { ReviewProduct } from "../components/componentsReviewProductPage/reviewProduct";

export const ReviewProductPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <ReviewProduct/>
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
