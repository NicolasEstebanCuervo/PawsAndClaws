import { useSelector } from "react-redux";
import { IAnimal } from "../../../redux/reducers/animalSlice";
import { LM, MM, SM, XLM } from "../../../theme/fonts";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ImagesGenerator } from "../../../redux/Api";
import * as color from "../../../theme/colors";

export const AnimalInformation = () => {
    const animalSelected = useSelector((state: any) => state.AnimalSlice);
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        const fetchImage = async () => {
            if (animalSelected.animalSelected.length > 0) {
                const breed = animalSelected.animalSelected[0].breed;
                const data = await ImagesGenerator(breed);
                setImageUrl(data);
            }
        };

        fetchImage();
    }, [animalSelected.animalSelected]);

    return (
        <>
            {animalSelected.animalSelected.map((animal: IAnimal) => (
                <SectionAnimalInformation key={animal.id}>
                    <ImageAnimal
                        src={imageUrl}
                        alt={`Imagen de ${animal.breed}`}
                    />

                    <LineDivider></LineDivider>

                    <TextsAnimalInformation>
                        <XLM>Información de la mascota</XLM>
                        <ContainerNameAnimal>
                            <TitleIndividual>Nombre</TitleIndividual>
                            <SM>{animal.name}</SM>
                        </ContainerNameAnimal>

                        <SubContainerTexts>
                            <IndividualTexts>
                                <TitleIndividual>Edad</TitleIndividual>
                                <SM>{animal.age}</SM>
                            </IndividualTexts>

                            <IndividualTexts>
                                <TitleIndividual>Raza</TitleIndividual>
                                <SM>{animal.breed}</SM>
                            </IndividualTexts>

                            <IndividualTexts>
                                <TitleIndividual>Dueño</TitleIndividual>
                                <SM>{animal.information.owner}</SM>
                            </IndividualTexts>

                            <IndividualTexts>
                                <TitleIndividual>Condiciones</TitleIndividual>

                                {animal.information.conditions ? (
                                    <SM>{animal.information.conditions}</SM>
                                ) : (
                                    <SM>Ninguna</SM>
                                )}
                            </IndividualTexts>
                        </SubContainerTexts>

                        <ContainerDescriptionsAnimal>
                            <LM>Informacion sobre {animal.name}</LM>
                            <SM>{animal.information.description_large}</SM>
                        </ContainerDescriptionsAnimal>

                        <ContainerDescriptionsAnimal>
                        <LM>Historia de rescate de {animal.name}</LM>
                            <SM>{animal.information.history}</SM>
                        </ContainerDescriptionsAnimal>
                    </TextsAnimalInformation>
                </SectionAnimalInformation>
            ))}
        </>
    );
};

const SectionAnimalInformation = styled.section`
    width: 50%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

const ImageAnimal = styled.img`
    width: 45rem;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const IndividualTexts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
