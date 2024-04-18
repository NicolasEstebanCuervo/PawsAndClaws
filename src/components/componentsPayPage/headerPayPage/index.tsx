import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import ImageBackground from "../../../assets/images/BackgroundPayPage.png";
import { LM, XLLLM, XLLM, XLM } from "../../../theme/fonts";

export const HeaderPay = () => {
    return (
        <SectionFunFacts>
            <SubContainerFunFacts>
                <TextsFunFacts>
                    <TitleFunFacts>
                        ¡Detalles de tu Compra para tu Compañero Peludo!
                    </TitleFunFacts>
                    <XLM>
                        ¡Aquí están los productos seleccionados para consentir a
                        tu adorable amigo! Desde deliciosas golosinas hasta
                        juguetes interactivos, cada artículo ha sido elegido con
                        amor para mantener a tu mascota feliz y saludable.
                        ¡Gracias por elegirnos para mimar a tu peludo compañero!
                    </XLM>
                </TextsFunFacts>
            </SubContainerFunFacts>
        </SectionFunFacts>
    );
};

const SectionFunFacts = styled.section`
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

const SubContainerFunFacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
`;

const TextsFunFacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
`;

const TitleFunFacts = styled(XLLLM)`
    font-weight: bold;
`;
