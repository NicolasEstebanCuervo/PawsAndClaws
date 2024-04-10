import styled from "@emotion/styled";
import { SM, XLM } from "../../../theme/fonts";
import * as color from "../../../theme/colors";
import { Link } from "react-router-dom";

export const Appointment = () => {
    return (
        <SectionAppointment>
            <TextsAppointment>
                <div>
                    <XLM>
                        ¡Agenda Ahora y Dale a tu Mascota la Atención que
                        Merece!
                    </XLM>
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
                <Link to="/appointment">
                    <Button>Agendar cita</Button>
                </Link>
            </TextsAppointment>
            <ImageAppointment
                src={require("../../../assets/images/Appointment.webp")}
            />
        </SectionAppointment>
    );
};

const SectionAppointment = styled.section`
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    margin-top: 10rem;
    margin-top: 10rem;
`;

const TextsAppointment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 45%;
`;

const Button = styled.button`
    background-color: ${color.Blue};
    border: none;
    border-radius: 0.3rem;
    width: 90%;
    font-size: 1.3rem;
    height: 3.5rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;

const ImageAppointment = styled.img`
    width: 30rem;
    border-radius: 0.3rem;
`;
