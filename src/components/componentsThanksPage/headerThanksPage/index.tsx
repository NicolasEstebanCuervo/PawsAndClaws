import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import ImageBackground from "../../../assets/images/BackgroundThanks.png";
import { XLLLM, XLM } from "../../../theme/fonts";

export const HeaderThanks = () => {
    return (
        <SectionFunFacts>
            <SubContainerFunFacts>
                <TextsFunFacts>
                    <TitleFunFacts>
                        ¡Gracias por Consentir a tu Peludo Amigo con una Compra
                        Llena de Alegría!
                    </TitleFunFacts>
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
                </TextsFunFacts>
            </SubContainerFunFacts>
        </SectionFunFacts>
    );
};

const SectionFunFacts = styled.section`
    width: 100%;
    max-width: 2000px;
    height: 70rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
`;

const SubContainerFunFacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const TextsFunFacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const TitleFunFacts = styled(XLLLM)`
    font-weight: bold;
`;
