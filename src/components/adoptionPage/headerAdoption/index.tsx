import styled from "@emotion/styled";
import * as color from "@theme/colors";
import ImageBackground from "@assets/images//BgHeaderAdoption.webp";
import { XLLLM, XLM } from "@theme/fonts";

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <Texts>
                    <Title>
                        ¡Adopta una Sonrisa Peluda! Encuentra a tu Peludo
                        Favorito
                    </Title>
                    <XLM>
                        ¡Prepárate para un encuentro peludamente perfecto!
                        Nuestro desfile de adorables mascotas está aquí para
                        hacer brillar tu día. ¡Ven y conoce a tus posibles
                        nuevos mejores amigos de cuatro patas! ¡La aventura
                        comienza aquí!
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
    align-items: center;
    width: 80%;
    height: 90%;

    @media (max-width: 750px) {
        width: 95%;
        height: 100%;
        justify-content: center;
        text-align: center;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;

    @media (max-width: 750px) {
        width: 100%;
    }
`;

const Title = styled(XLLLM)`
    font-weight: bold;
`;
