import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { FormPay } from "../components/componentsFormPayPage/formPay";

export const FormPayPage = () => {
    return (
        <ContainerPage>
            <NavBar />
                <FormPay />
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

