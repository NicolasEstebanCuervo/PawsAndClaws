import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { HeaderAppointment } from "../components/componentsAppointment/headerAppointment";
import { AboutAppointment } from "../components/componentsAppointment/aboutAppointment";
import { FormAppointment } from "../components/componentsAppointment/formAppointment";
import { ReviewsPawsAndClaws } from "../components/componentsAppointment/reviewsPawsAndClaws";
import { FrequentQuestions } from "../components/componentsAppointment/frequentQuestions";
import { FunFactsAppointment } from "../components/componentsAppointment/funFactsAppointment";

export const AppointmentPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <HeaderAppointment />
            <ContainerContentForm>
                <AboutAppointment />
                <FormAppointment />
            </ContainerContentForm>
            <ReviewsPawsAndClaws />
            <FrequentQuestions />
            <FunFactsAppointment />
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

const ContainerContentForm = styled.main`
    display: flex;
    gap: 5rem;
    width: 80%;
    margin: 5rem 0;
`;
