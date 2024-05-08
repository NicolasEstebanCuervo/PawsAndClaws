import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { NavBar } from "@components/componentsGlobals/navbar";
import { Header } from "@components/storePage/header";
import { ListProductsStore } from "@components/storePage/header/listProductsStore";
import { FunFacts } from "@components/storePage/funFacts";
import { ContentStore } from "@components/storePage/contentStorePage";
import { Footer } from "@components/componentsGlobals/footer";

export const Store = () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <ListProductsStore indexArray1={0} indexArray2={8} />
            <ListProductsStore indexArray1={9} indexArray2={17} />
            <FunFacts />
            <ListProductsStore indexArray1={18} indexArray2={26} />
            <ContentStore />
            <ListProductsStore indexArray1={27} indexArray2={35} />
            <ListProductsStore indexArray1={36} indexArray2={50} />
            <MarginContainer>
                <Footer />
            </MarginContainer>
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

const MarginContainer = styled.div`
    margin-top: 10rem;
    width: 100%;
`;
