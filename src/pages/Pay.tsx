import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import { Header } from "../components/payPage/headerPayPage";
import {ListProductsPay} from "../components/payPage/listProductsPay";
import { CardPay } from "../components/payPage/cardPay";
import { CarouselProducts } from "../components/payPage/carouselProducts";
import { Footer } from "../components/componentsGlobals/footer";

export const Pay= () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Container>
                <ListProductsPay />
                <CardPay />
            </Container>
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

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    padding: 5rem 0  0;
`;
