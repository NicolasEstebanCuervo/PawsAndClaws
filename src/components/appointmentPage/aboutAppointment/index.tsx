import styled from "@emotion/styled";
import { LM, SM, XLM } from "../../../theme/fonts";
import { useEffect, useState } from "react";
import { ImagesGenerator } from "../../../redux/Api";
import * as color from "../../../theme/colors";

export const AboutAppointment = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const data = await ImagesGenerator("clinical-dog");
            setImageUrl(data);
        };

        fetchImage();
    }, []);

    return (
        <Container>
            {imageUrl && <Image src={imageUrl} alt={`Imagen de `} />}

            <LineDivider></LineDivider>

            <Texts>
                <SubTexts>
                    <XLM>¡Recuerda estos consejos!</XLM>

                    <TextsIndividual>
                        <Title>Preparación</Title>
                        <SM>
                            Recuerda llevar a tu mascota con al menos 2 horas de
                            ayuno.
                        </SM>
                    </TextsIndividual>
                    <TextsIndividual>
                        <Title>Documentos</Title>
                        <SM>
                            No olvides llevar el historial médico y las vacunas
                            al día.
                        </SM>
                    </TextsIndividual>
                    <TextsIndividual>
                        <Title>Emergencias</Title>
                        <SM>Para emergencias, comunícate al 3238092023.</SM>
                    </TextsIndividual>
                </SubTexts>

                <ContainerDescription>
                    <LM>Nuestro compromiso con tu mascota:</LM>
                    <SM>
                        Nuestro equipo está comprometido con brindar la mejor
                        atención médica y cuidado para tu mascota. ¡Confía en
                        nosotros para cuidar de ellos como si fueran nuestros
                        propios amigos peludos!
                    </SM>
                </ContainerDescription>
            </Texts>
        </Container>
    );
};

const Container = styled.section`
    width: 50%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

const Image = styled.img`
    width: 40rem;
    border-radius: 0.3rem;
    height: 30rem;
    object-fit: cover;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const LineDivider = styled.div`
    width: 100%;
    height: 0.1rem;
    background: ${color.LightGray};
`;

const SubTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TextsIndividual = styled.div`
    display: flex;
    flex-direction: column;
    background: ${color.LightGray};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
`;

const Title = styled(SM)`
    font-weight: bold;
`;

const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
