import styled from "@emotion/styled";
import { SM, XLLM } from "@theme/fonts";
import * as color from "@theme/colors";
import { Link } from "react-router-dom";

export const Appointment = () => {
    return (
        <Container data-testid="container">
            <Texts>
                <div>
                    <XLLM>
                        ¡Agenda Ahora y Dale a tu Mascota la Atención que
                        Merece!
                    </XLLM>
                    <SM>
                        En nuestra veterinaria, entendemos el amor y la
                        responsabilidad que viene con tener una mascota. Nuestro
                        equipo de profesionales dedicados está aquí para
                        proporcionar el mejor cuidado posible para tus amigos de
                        cuatro patas. Desde exámenes de rutina hasta
                        tratamientos especializados, estamos comprometidos a
                        mantener a tus mascotas saludables y felices en cada
                        etapa de sus vidas. ¡Agenda una cita hoy mismo y dale a
                        tus compañeros peludos el cuidado que se merecen!
                    </SM>
                </div>
                <ContainerButton>
                    <Link to="/appointment">
                        <Button data-testid="button">Agendar cita</Button>
                    </Link>
                </ContainerButton>
            </Texts>
            <Image src={require("@assets/images/ImgAppointmentIndex.webp")} />
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    margin-top: 10rem;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40%;

    @media (max-width: 1000px) {
        width: 80%;
        align-items: center;
    }
`;

const ContainerButton = styled.div`
    width: 90%;
    
    @media (max-width: 1000px) {
        width: 100%;
    }
`

const Button = styled.button`
    background-color: ${color.Blue};
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    font-size: 1.3rem;
    height: 3.5rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 750px) {
        font-size: 1rem;
    }
`;

const Image = styled.img`
    width: 30rem;
    border-radius: 0.3rem;

    @media (max-width: 1150px) {
        width: 25rem;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;
