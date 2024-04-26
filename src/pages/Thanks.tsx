import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import { Header } from "../components/thanksPage/headerThanksPage";
import { Footer } from "../components/componentsGlobals/footer";

export const Thanks= () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
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

