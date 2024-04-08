import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import ImageBackground from "../../../assets/images/BackgroundHeaderAdoptionPage.png";
import { LM, XLLLM, XLLM, XLM } from "../../../theme/fonts";

export const ContentAdoptionPage = () => {
    return (
        <SectionFunFacts>
            <SubContainerFunFacts>
            <TextsFunFacts>
                <TitleFunFacts>
                    ¡Adopta una Sonrisa Peluda! Encuentra a tu Peludo Favorito
                </TitleFunFacts>
                <XLM>
                    ¡Prepárate para un encuentro peludamente perfecto! Nuestro
                    desfile de adorables mascotas está aquí para hacer brillar
                    tu día. ¡Ven y conoce a tus posibles nuevos mejores amigos
                    de cuatro patas! ¡La aventura comienza aquí!
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
    align-items: center;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
`;

const SubContainerFunFacts = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 90%;
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
