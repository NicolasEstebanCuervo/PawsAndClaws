import styled from "@emotion/styled";
import { NavBar } from "@components/componentsGlobals/navbar";
import { Header } from "@components/indexPage/header";
import { Categories } from "@components/indexPage/categories";
import { CarouselAnimals } from "@components/indexPage/carouselAnimals";
import { AboutUs } from "@components/indexPage/aboutUs";
import { CarouselProducts } from "@components/componentsGlobals/carouselProducts";
import { Appointment } from "@components/indexPage/appointment";
import { FunFacts } from "@components/indexPage/funFactsIndex";
import { Footer } from "@components/componentsGlobals/footer";

export const Index = () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Categories />
            <CarouselAnimals  />
            <AboutUs />
            <CarouselProducts title="Explora nuestra tienda en linea"/>
            <Appointment/>
            {/* <FunFacts/> */}
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
