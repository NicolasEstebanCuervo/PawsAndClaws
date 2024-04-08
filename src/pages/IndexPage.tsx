import styled from "@emotion/styled";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { Header } from "../components/componentsIndexPage/header";
import { Categories } from "../components/componentsIndexPage/categories";
import { Appointment } from "../components/componentsIndexPage/appointment";
import { AboutUs } from "../components/componentsIndexPage/aboutUs";
import { AnimalsAdoption } from "../components/componentsIndexPage/animalsAdoption";
import { Products } from "../components/componentsIndexPage/products";
import { FunFactsIndex } from "../components/componentsIndexPage/funFactsIndex";

export const IndexPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Categories/>
            <AnimalsAdoption />
            <AboutUs />
            <Products/>
            <Appointment/>
            <FunFactsIndex/>
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
