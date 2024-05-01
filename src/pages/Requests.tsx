import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { NavBar } from "@components/componentsGlobals/navbar";
import { ListAdoptionRequests } from "@components/myRequestsPage/listAdoptionRequests";
import { ContentAdoptionRequests } from "@components/myRequestsPage/contentAdoptionRequests";
import { ListAppointmentRequests } from "@components/myRequestsPage/listAppointmentRequests";
import { ContentAppointmentRequests } from "@components/myRequestsPage/contentAppointmentRequest";
import { FormContact } from "@components/myRequestsPage/formContact";
import { SocialNetworks } from "@components/myRequestsPage/socialNetworks";
import { FunFacts } from "@components/myRequestsPage/funFacts";
import { Footer } from "@components/componentsGlobals/footer";
import { XLLLM } from "@theme/fonts";

export const Requests = () => {
    return (
        <ContainerPage>
            <NavBar />
            <ListAdoptionRequests />
            <ContentAdoptionRequests />
            <ListAppointmentRequests />
            <ContentAppointmentRequests />
            <Container>
                <Title>Contactanos</Title>
                <SubContainerContact>
                    <FormContact />
                    <SocialNetworks />
                </SubContainerContact>
            </Container>
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

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0 10rem;
    gap: 3rem;
    background: ${color.LightBrown};
`;

const Title = styled(XLLLM)`
    font-weight: bold;
`;

const SubContainerContact = styled.div`
    display: flex;
`;
