import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import ImageBackground from "../../../assets/images/BackgroundAppointmentPage.png";
import { LM, XLLLM, XLLM, XLM } from "../../../theme/fonts";

export const HeaderAppointment = () => {
    return (
        <SectionFunFacts>
            <SubContainerFunFacts>
                <TextsFunFacts>
                    <TitleFunFacts>
                        ¡Mantén a tu Mascota Sana y Feliz! Reserva la Cita
                        Veterinaria Hoy Mismo
                    </TitleFunFacts>
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
