import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import ImageBackground from "../../../assets/images/BgHeaderAppointment.webp";
import { XLLLM } from "../../../theme/fonts";

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <Texts>
                    <Title>
                        ¡Mantén a tu Mascota Sana y Feliz! Reserva la Cita
                        Veterinaria Hoy Mismo
                    </Title>
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
    align-items: center;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
`;

const SubContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 90%;
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
