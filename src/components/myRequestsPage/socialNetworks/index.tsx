import styled from "@emotion/styled";
import { MM, XLLM, XLM } from "../../../theme/fonts";
import * as color from "../../../theme/colors";

export const SocialNetworks = () => {
    return (
        <Container>
            <Title>Redes sociales</Title>
            <Texts>
                <ContainerIndividual>
                    <Icon className="bi bi-instagram"></Icon>
                    <div>
                        <TitleIndividual>Facebook</TitleIndividual>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </ContainerIndividual>

                <ContainerIndividual>
                    <Icon className="bi bi-facebook"></Icon>
                    <div>
                        <TitleIndividual>Facebook</TitleIndividual>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </ContainerIndividual>

                <ContainerIndividual>
                    <Icon className="bi bi-twitter"></Icon>
                    <div>
                        <TitleIndividual>Facebook</TitleIndividual>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </ContainerIndividual>

                <ContainerIndividual>
                    <Icon className="bi bi-linkedin"></Icon>
                    <div>
                        <TitleIndividual>Facebook</TitleIndividual>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </ContainerIndividual>
            </Texts>
        </Container>
    );
};

const Container = styled.div`
    background: ${color.LightBeige};
    padding-left: 2rem;
    width: 30rem;
    height: 35rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
`;

const Title = styled(XLLM)`
    font-weight: bold;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ContainerIndividual = styled.div`
    display: flex;
    gap: 1rem;
`;

const Icon = styled.i`
    font-size: 3rem;
    cursor: pointer;
`;

const TitleIndividual = styled(XLM)`
    cursor: pointer;
`;
