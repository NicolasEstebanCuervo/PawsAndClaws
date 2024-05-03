import styled from "@emotion/styled";
import { NavBar } from "@components/componentsGlobals/navbar";
import { Header } from "@components/adoptionPage/header";
import { SearchInput } from "@components/adoptionPage/searchInput";
import { ListAnimalInAdoption } from "@components/adoptionPage/listAnimalInAdoption";
import { FunFacts } from "@components/adoptionPage/funFacts";
import { Footer } from "@components/componentsGlobals/footer";

export const Adoption= () => {

    return (
        <ContainerPage>
            <NavBar />
            <Header/>
            <SearchInput />
            <ListAnimalInAdoption indexArray1={0} indexArray2={12}/>
            {/* <FunFacts /> */}
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
