import styled from "@emotion/styled";
import { XLLM, XLM } from "@theme/fonts";
import * as color from "@theme/colors";
import ImageHeader from "@assets/images//BgHeaderIndex.webp";

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <XLLM colorText={color.White}>
                    Dedicados a la Salud y Felicidad de tus Mascotas. Clínica
                    Veterinaria de Confianza y Cariño
                </XLLM>
                <Subtitle colorText={color.White}>
                    Expertos en Cuidado y Prevención para tus peludos amigos.
                </Subtitle>
            </SubContainer>
        </Container>
    );
};

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    background: linear-gradient(
            to right,
            rgba(67, 34, 41, 0.573) 0%,
            #af601a 300%
        ),
        url(${ImageHeader});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    text-align: center;
`
const Subtitle = styled(XLM)`
    @media (max-width: 750px) {
        display:none   
    }
`