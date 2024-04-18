import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import ImageBackground from "../../../assets/images/BackgroundStorePage.png";
import { LM, XLLLM, XLLM, XLM } from "../../../theme/fonts";

export const HeaderStore = () => {
    return (
        <SectionFunFacts>
            <SubContainerFunFacts>
                <TextsFunFacts>
                    <TitleFunFacts>
                        ¡Descubre la Magia de los Productos para tu Compañero
                        Peludo!
                    </TitleFunFacts>
                    <XLM>
                        ¡Explora nuestro amplio catálogo de productos para
                        mascotas y sumérgete en un mundo de comodidad y
                        diversión para tu fiel amigo! Desde deliciosos
                        bocadillos hasta juguetes interactivos, tenemos todo lo
                        que necesitas para mantener a tu mascota feliz y
                        saludable. ¡No esperes más para consentir a tu peludo
                        compañero!
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
