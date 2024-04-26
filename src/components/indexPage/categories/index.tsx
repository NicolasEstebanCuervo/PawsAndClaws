import styled from "@emotion/styled";
import { LM, SM, XLLM } from "../../../theme/fonts";

export const Categories = () => {
    return (
        <Container>
            <XLLM>Conoce Nuestros Servicios para Mascotas</XLLM>
            <SubContainer>
                <ContainerIndividual>
                    <Icon className="bi bi-shop"></Icon>
                    <div>
                        <LM>Tienda</LM>
                        <SM>
                            ¡Explora nuestra tienda y encuentra todo lo que
                            necesitas para tu compañero peludo! En Paws and
                            Claws, nos dedicamos a ofrecerte una amplia gama de
                            alimentos, juguetes, accesorios y más, todo
                            cuidadosamente seleccionado para el bienestar de tu
                            mascota.
                        </SM>
                    </div>
                </ContainerIndividual>

                <ContainerIndividual>
                    <Icon className="bi bi-balloon-heart-fill"></Icon>
                    <div>
                        <LM>Adopción</LM>
                        <SM>
                            Considera la adopción. En Paws and Claws,
                            facilitamos el proceso de adopción de animales
                            rescatados que necesitan un hogar amoroso. ¡Descubre
                            a tu próximo compañero peludo y dale un nuevo
                            comienzo lleno de amor y cuidado!
                        </SM>
                    </div>
                </ContainerIndividual>

                <ContainerIndividual>
                    <Icon className="bi bi-bandaid-fill"></Icon>
                    <div>
                        <LM>Ir al consultorio</LM>
                        <SM>
                            En Paws and Claws, contamos con un equipo dedicado
                            de veterinarios expertos listos para cuidar de la
                            salud y el bienestar de tu mascota. Agenda una
                            consulta con nosotros y asegúrate de que tu
                            compañero peludo reciba la atención que se merece.
                        </SM>
                    </div>
                </ContainerIndividual>
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 3rem;  
    margin-top: 10rem;
`;

const SubContainer = styled.div`
    display: flex;
`;

const ContainerIndividual = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
    width: 28rem;
`;

const Icon = styled.i`
    font-size: 2.2rem;
`;