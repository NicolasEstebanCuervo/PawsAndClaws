import styled from "@emotion/styled";
import { LM, SM, XLM } from "../../../theme/fonts";
import { useEffect, useState } from "react";
import { ImagesGenerator } from "../../../redux/Api";
import * as color from "../../../theme/colors"

export const AboutAppointment = ()=>{

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const data = await ImagesGenerator("clinical-dog");
            setImageUrl(data);
        };

        fetchImage();
    }, []);

    return(
        <TextsFormAppointment>
        {imageUrl && <ImageAnimal src={imageUrl} alt={`Imagen de `} />}

        <LineDivider></LineDivider>

        <TextsAnimalInformation>
            <SubContainerTexts>
                <XLM>¡Recuerda estos consejos!</XLM>

                <IndividualTexts>
                    <TitleIndividual>Preparación</TitleIndividual>
                    <SM>
                        Recuerda llevar a tu mascota con al menos 2
                        horas de ayuno.
                    </SM>
                </IndividualTexts>
                <IndividualTexts>
                    <TitleIndividual>Documentos</TitleIndividual>
                    <SM>
                        No olvides llevar el historial médico y las
                        vacunas al día.
                    </SM>
                </IndividualTexts>
                <IndividualTexts>
                    <TitleIndividual>Emergencias</TitleIndividual>
                    <SM>Para emergencias, comunícate al 3238092023.</SM>
                </IndividualTexts>
            </SubContainerTexts>

            <ContainerDescriptionsAnimal>
                <LM>Nuestro compromiso con tu mascota:</LM>
                <SM>
                    Nuestro equipo está comprometido con brindar la
                    mejor atención médica y cuidado para tu mascota.
                    ¡Confía en nosotros para cuidar de ellos como si
                    fueran nuestros propios amigos peludos!
                </SM>
            </ContainerDescriptionsAnimal>
        </TextsAnimalInformation>
    </TextsFormAppointment>
    )
}

const TextsFormAppointment = styled.section`
    width: 50%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

const ImageAnimal = styled.img`
    width: 40rem;
    border-radius: 0.3rem;
    height: 30rem;
    object-fit: cover;
`;

const TextsAnimalInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const LineDivider = styled.div`
    width: 100%;
    height: 0.1rem;
    background: ${color.LightGray};
`;

const ContainerNameAnimal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color.LightGray2};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
`;

const SubContainerTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const IndividualTexts = styled.div`
    display: flex;
    flex-direction: column;
    background: ${color.LightGray};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
`;

const TitleIndividual = styled(SM)`
    font-weight: bold;
`;

const ContainerDescriptionsAnimal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
