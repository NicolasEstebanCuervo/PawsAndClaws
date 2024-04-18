import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { HeaderThanks } from "../components/componentsThanksPage/headerThanksPage";

export const ThanksPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <HeaderThanks />
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

