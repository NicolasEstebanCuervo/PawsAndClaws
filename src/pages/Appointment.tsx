import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { NavBar } from "@components/componentsGlobals/navbar";
import { Header } from "@components/appointmentPage/header";
import { AboutAppointment } from "@components/appointmentPage/aboutAppointment";
import { FormAppointment } from "@components/appointmentPage/formAppointment";
import { ReviewsPawsAndClaws } from "@components/appointmentPage/reviewsPawsAndClaws";
import { FrequentQuestions } from "@components/appointmentPage/frequentQuestions";
import { FunFacts } from "@components/appointmentPage/funFacts";
import { Footer } from "@components/componentsGlobals/footer";

export const Appointment = () => {
    return (
        <ContainerPage>
            <NavBar />
            <Header />
            <Container>
                <AboutAppointment />
                <LineDivider></LineDivider>
                <FormAppointment />
            </Container>
            <ReviewsPawsAndClaws />
            <FrequentQuestions />
            {/* <FunFacts />  */}
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
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;

    @media (max-width: 1250px) {
        flex-direction: column;
    }

    @media (max-width: 750px) {
        width: 95%;
    }
`;

const LineDivider = styled.div`
    display: none;

    @media (max-width: 1250px) {
        display: block;
        width: 100%;
        height: 0.1rem;
        background: ${color.LightGray};
    }
`;
