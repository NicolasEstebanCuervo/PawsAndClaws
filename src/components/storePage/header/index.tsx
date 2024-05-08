import styled from "@emotion/styled";
import * as color from "@theme/colors";
import ImageBackground from "@assets/images/BgStore.webp";
import { XLLLM, XLM } from "@theme/fonts";

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <Texts>
                    <Title>
                        ¡Descubre la Magia de los Productos para tu Compañero
                        Peludo!
                    </Title>
                    <XLM>
                        ¡Explora nuestro amplio catálogo de productos para
                        mascotas y sumérgete en un mundo de comodidad y
                        diversión para tu fiel amigo! Desde deliciosos
                        bocadillos hasta juguetes interactivos, tenemos todo lo
                        que necesitas para mantener a tu mascota feliz y
                        saludable. ¡No esperes más para consentir a tu peludo
                        compañero!
                    </XLM>
                </Texts>
            </SubContainer>
        </Container>
    );
};

const Container = styled.header`
    width: 100%;
    max-width: 2000px;
    padding: 5% 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
    margin-bottom: 10rem;

    @media (min-width: 1600px) {
        height: 50rem;
    }

    @media (min-width: 1250px) and (max-width: 1599px) {
        height: 40rem;
    }
    
    @media (max-width: 750px) {
        background: ${color.LightBeige};
    }
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 80%;
    height: 90%;

    @media (max-width: 750px) {
        width: 95%;
        height: 100%;
        justify-content: center;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;

    @media (max-width: 750px) {
        width: 100%;
    }
`;

const Title = styled(XLLLM)`
    font-weight: bold;
`;
