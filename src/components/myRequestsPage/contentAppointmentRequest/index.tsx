import styled from "@emotion/styled";
import { SM, XLLM } from "@theme/fonts";
import * as color from "@theme/colors";
import { Link } from "react-router-dom";

export const ContentAppointmentRequests = () => {
    return (
        <Container data-testid="container">
            <Texts>
                <div>
                    <XLLM>
                        Agenda Más Citas para el Cuidado de tus Mascotas
                    </XLLM>
                    <SM>
                        ¡Gracias por confiar en nosotros para el cuidado de tus
                        mascotas! Aprovecha este momento para programar más
                        citas y asegurarte de que tus amigos peludos estén
                        siempre en óptimas condiciones de salud y bienestar.
                        Nuestro equipo está aquí para brindarles el mejor
                        cuidado posible, así que no dudes en reservar más citas
                        según sea necesario. Cuidar de tus mascotas es una
                        responsabilidad que tomamos muy en serio, y queremos
                        ayudarte a mantenerlos felices y saludables en todo
                        momento. ¡Agenda ahora y mantén a tus amigos de cuatro
                        patas en su mejor estado!
                    </SM>
                </div>
                <Link to="/appointment">
                    <Button data-testid="button">Agendar cita</Button>
                </Link>
            </Texts>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    background: ${color.Cream};
    width: 100%;
    padding: 7rem 0;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 50%;
    gap: 2rem;

    @media (max-width: 1600px) {
        width: 70%;
    }

    @media (max-width: 750px) {
        width: 90%;
    }
`;

const Button = styled.button`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 40%;
    font-size: 1.2rem;
    height: 4rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 750px) {
        font-size: 1rem;
        width: 100%;
    }
`;
