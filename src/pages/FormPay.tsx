import styled from "@emotion/styled";
import { NavBar } from "@components/componentsGlobals/navbar";
import { FormPayProduct } from "@components/formPayPage/formPayProduct";
import { Footer } from "@components/componentsGlobals/footer";

export const FormPay = () => {
    return (
        <ContainerPage>
            <NavBar />
                <FormPayProduct />
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

