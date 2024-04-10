import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { ListAnimalInAdoption } from "../components/componentsAdoptionPage/listAnimalInAdoption";
import { FunFactsAdoption } from "../components/componentsAdoptionPage/funFactsAdoption";
import { HeaderAdoption } from "../components/componentsAdoptionPage/headerAdoption";
import { SearchInput } from "../components/componentsAdoptionPage/searchInput";

export const AdoptionPage = () => {

    return (
        <ContainerPage>
            <NavBar />
            <HeaderAdoption/>
            <SearchInput />
            <ListAnimalInAdoption indexArray1={0} indexArray2={12}/>
            <FunFactsAdoption />
            <ListAnimalInAdoption indexArray1={13} indexArray2={30}/>
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
