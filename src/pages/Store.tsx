import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import { Header } from "../components/storePage/headerStorePage";
import { ListProductsStore } from "../components/storePage/listProductsStore";
import { FunFacts } from "../components/storePage/funFactsStore";
import { ContenStore } from "../components/storePage/contentStorePage";
import { Footer } from "../components/componentsGlobals/footer";


export const Store= () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <ListProductsStore indexArray1={0} indexArray2={8} />
            <ListProductsStore indexArray1={9} indexArray2={17} />
            <FunFacts />
            <ListProductsStore indexArray1={18} indexArray2={26} />
            <ListProductsStore indexArray1={27} indexArray2={35} />
            <ContenStore />
            <ListProductsStore indexArray1={36} indexArray2={50} />
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
