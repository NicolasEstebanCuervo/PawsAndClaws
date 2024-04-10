import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { ListProductsStore } from "../components/componentsStorePage/listProductsStore";
import { SearchInput } from "../components/componentsStorePage/searchInput";
import { HeaderAdoption } from "../components/componentsAdoptionPage/headerAdoption";
import { FunFactsAdoption } from "../components/componentsAdoptionPage/funFactsAdoption";

export const StorePage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <HeaderAdoption />
            <SearchInput />
            <ListProductsStore background={true} indexA={0} indexB={8} />
            <ListProductsStore background={true} indexA={9} indexB={17} />
            <FunFactsAdoption />
            <ListProductsStore background={true} indexA={18} indexB={26} />
            <ListProductsStore background={true} indexA={27} indexB={35} />
            <FunFactsAdoption />
            <ListProductsStore background={true} indexA={36} indexB={50} />
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
