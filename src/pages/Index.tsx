import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import { Header } from "../components/indexPage/header";
import { Categories } from "../components/indexPage/categories";
import { AnimalsInAdoption } from "../components/indexPage/animalsInAdoption";
import { AboutUs } from "../components/indexPage/aboutUs";
import { Products } from "../components/indexPage/products";
import { Appointment } from "../components/indexPage/appointment";
import { FunFacts } from "../components/indexPage/funFacts";
import { Footer } from "../components/componentsGlobals/footer";

export const Index = () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Categories/>
            <AnimalsInAdoption />
            <AboutUs />
            <Products/>
            <Appointment/>
            <FunFacts/>
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