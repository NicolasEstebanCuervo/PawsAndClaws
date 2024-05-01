import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { NavBar } from "@components/componentsGlobals/navbar";
import { AnimalInformation } from "@components/animalPage/animalInformation";
import { FormAnimalInAdoption } from "@components/animalPage/formAnimalInAdoption";
import { Footer } from "@components/componentsGlobals/footer";

export const AnimalInAdoption= () => {
    return (
        <ContainerPage>
            <NavBar />
            <Container>
                <AnimalInformation />
                <LineDivider></LineDivider>
                <FormAnimalInAdoption />
            </Container>
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
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;

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