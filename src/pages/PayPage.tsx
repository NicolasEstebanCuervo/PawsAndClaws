import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import ListProductsPay from "../components/componentsPayPage/listProductsPay";
import { CardPay } from "../components/componentsPayPage/cardPay";
import { CarouselProducts } from "../components/componentsPayPage/carouselProducts";
import { HeaderPay } from "../components/componentsPayPage/headerPayPage";

export const PayPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <HeaderPay />
            <ContentPayPage>
                <ListProductsPay />
                <CardPay />
            </ContentPayPage>
            <CarouselProducts />
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
`;

const ContentPayPage = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 5rem 0  0;
`;
