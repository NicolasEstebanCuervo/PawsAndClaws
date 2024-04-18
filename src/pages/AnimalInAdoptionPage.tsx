import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { AnimalInformation } from "../components/componentsAnimalInAdoptionPage/animalInformation";
import { FormAnimalInAdoption } from "../components/componentsAnimalInAdoptionPage/formAnimalInAdoption";

export const AnimalInAdoptionPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <ContainerContentForm>
                <AnimalInformation />
                <FormAnimalInAdoption />
            </ContainerContentForm>
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

const ContainerContentForm = styled.div`
    display: flex;
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;
`;
