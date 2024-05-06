import styled from "@emotion/styled";
import * as color from "@theme/colors";
import ImageBackground from "@assets/images//BgThanks.webp";
import { XLLLM, XLM } from "@theme/fonts";

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <Texts>
                    <Title>
                        ¡Gracias por Consentir a tu Peludo Amigo con tu compra!
                    </Title>
                    <XLM>
                        ¡Woof-tastic! ¡Tu decisión de consentir a tu peludo
                        compañero nos llena de alegría! ¡El equipo de Paws and Claws está emocionado de que hayas elegido nuestros
                        productos para hacer feliz a tu adorable amigo de cuatro
                        patas! Tu compra ha sido registrada y en breve recibirás
                        un correo electrónico con todos los detalles. ¡Estamos
                        seguros de que a tu peludo le encantarán los juguetes,
                        golosinas y más que has seleccionado para él! ¡Gracias
                        por confiar en nosotros para llenar de alegría la vida
                        de tu peludo amigo!
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

    @media (max-width: 1800px) {
        height: 55rem;
    }

    @media (max-width: 1250px) {
        height: 35rem;
        background: ${color.LightBeige};
        align-items: center;
    }

    @media (max-width: 750px) {
        height: auto;
        padding: 2rem 0;
    }
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: 1250px) {
        height: 90%;
        width: 90%;
    }

    @media (max-width: 750px) {
        height: 100%;
    }
`;

const Title = styled(XLLLM)`
    font-weight: bold;
`;
