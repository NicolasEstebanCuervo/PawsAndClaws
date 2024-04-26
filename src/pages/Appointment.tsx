import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import { Header } from "../components/appointmentPage/headerAppointment";
import { AboutAppointment } from "../components/appointmentPage/aboutAppointment";
import { FormAppointment } from "../components/appointmentPage/formAppointment";
import { ReviewsPawsAndClaws } from "../components/appointmentPage/reviewsPawsAndClaws";
import { FrequentQuestions } from "../components/appointmentPage/frequentQuestions";
import { FunFacts } from "../components/appointmentPage/funFactsAppointment";
import { Footer } from "../components/componentsGlobals/footer";


export const Appointment= () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Container>
                <AboutAppointment />
                <FormAppointment />
            </Container>
            <ReviewsPawsAndClaws />
            <FrequentQuestions />
            <FunFacts />
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

const Container = styled.main`
    display: flex;
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;
`;
