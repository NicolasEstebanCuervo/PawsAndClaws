import styled from "@emotion/styled";
import * as color from "@theme/colors";
import ImageBackground from "@assets/images//BgPay.webp";
import { XLLLM, XLM } from "@theme/fonts";

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <Texts>
                    <Title>
                        ¡Detalles de tu Compra para tu Compañero Peludo!
                    </Title>
                    <XLM>
                        ¡Aquí están los productos seleccionados para consentir a
                        tu adorable amigo! Desde deliciosas golosinas hasta
                        juguetes interactivos, cada artículo ha sido elegido con
                        amor para mantener a tu mascota feliz y saludable.
                        ¡Gracias por elegirnos para mimar a tu peludo compañero!
                    </XLM>
                </Texts>
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    max-width: 2000px;
    height: 50rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
`;

const Title = styled(XLLLM)`
    font-weight: bold;
`;
