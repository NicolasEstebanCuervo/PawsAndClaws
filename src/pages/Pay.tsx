import styled from "@emotion/styled";
import { NavBar } from "@components/componentsGlobals/navbar";
import { Header } from "@components/payPage/header";
import {ListProductsPay} from "@components/payPage/listProductsPay";
import { CardPay } from "@components/payPage/cardPay";
import { CarouselProducts } from "@components/componentsGlobals/carouselProducts";
import { Footer } from "@components/componentsGlobals/footer";
import * as color from "@theme/colors"

export const Pay= () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Container>
                <ListProductsPay />
                <LineDivider></LineDivider>
                <CardPay />
            </Container>
            <CarouselProducts title="Explora otros productos"/> 
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

    @media (max-width: 1250px) {
        flex-direction: column;
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