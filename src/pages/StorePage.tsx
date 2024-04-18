import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { ListProductsStore } from "../components/componentsStorePage/listProductsStore";
import { SearchInput } from "../components/componentsStorePage/searchInput";
import { FunFactsStore } from "../components/componentsStorePage/funFactsStore";
import { ContenStorePage } from "../components/componentsStorePage/contentStorePage";
import { HeaderStore } from "../components/componentsStorePage/headerStorePage";

export const StorePage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <HeaderStore />
            <SearchInput />
            <ListProductsStore indexA={0} indexB={8} />
            <ListProductsStore indexA={9} indexB={17} />
            <FunFactsStore />
            <ListProductsStore indexA={18} indexB={26} />
            <ListProductsStore indexA={27} indexB={35} />
            <ContenStorePage />
            <ListProductsStore indexA={36} indexB={50} />
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
