import styled from "@emotion/styled";
import * as color from "../theme/colors";
import { NavBar } from "../components/componentsGlobals/navbar";
import Footer from "../components/componentsGlobals/footer";
import { ListAdoptionRequests } from "../components/componentsMyRequests/listAdoptionRequests";
import { ListAppointmentRequests } from "../components/componentsMyRequests/listAppointmentRequests";
import { ContentAdoptionRequests } from "../components/componentsMyRequests/contentAdoptionRequests";
import { FormContact } from "../components/componentsMyRequests/formContact";
import { SocialNetworks } from "../components/componentsMyRequests/socialNetworks";
import { XLLLM } from "../theme/fonts";
import { FunFactsMyRequests } from "../components/componentsMyRequests/funFactsMyRequests";
import { ContentAppointmentRequests } from "../components/componentsMyRequests/contentAppointmentRequest";

export const RequestsPage = () => {
    return (
        <ContainerPage>
            <NavBar />
            <ListAdoptionRequests />
            <ContentAdoptionRequests />
            <ListAppointmentRequests />
            <ContentAppointmentRequests />
            <SectionContact>
                <TitleContact>Contactanos</TitleContact>
                <SubContainerContact>
                    <FormContact />
                    <SocialNetworks />
                </SubContainerContact>
            </SectionContact>
            <FunFactsMyRequests />
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

const SectionContact = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0 10rem;
    gap: 3rem;
    background: ${color.LightBrown};
`;

const TitleContact = styled(XLLLM)`
    font-weight: bold;
`;

const SubContainerContact = styled.div`
    display: flex;
`;
