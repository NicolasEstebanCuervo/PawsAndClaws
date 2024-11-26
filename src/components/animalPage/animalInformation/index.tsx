import { useSelector } from "react-redux";
import { IAnimal } from "@reducers/animalSlice";
import { LM, SM, XLM } from "@theme/fonts";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ImagesGenerator } from "src/redux/temp_api/index";
import * as color from "@theme/colors";

export const AnimalInformation = () => {
    const animalSlice = useSelector((state: any) => state.AnimalSlice);
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        const fetchImage = async () => {
            if (animalSlice.animalSelected.length > 0) {
                const breed = animalSlice.animalSelected[0].breed;
                const data = await ImagesGenerator(breed);
                setImageUrl(data);
            }
        };

        fetchImage();
    }, [animalSlice.animalSelected]);

    return (
        <>
            {animalSlice.animalSelected.map((animal: IAnimal) => (
                <Container key={animal.id}>
                    <Image src={imageUrl} alt={`Imagen de ${animal.breed}`} />

                    <LineDivider></LineDivider>

                    <Texts>
                        <XLM>Información de la mascota</XLM>
                        <ContainerName>
                            <Title>Nombre</Title>
                            <SM>{animal.name}</SM>
                        </ContainerName>

                        <SubTexts>
                            <TextsIndividual>
                                <Title>Edad</Title>
                                <SM>{animal.age}</SM>
                            </TextsIndividual>

                            <TextsIndividual>
                                <Title>Raza</Title>
                                <SM>{animal.breed}</SM>
                            </TextsIndividual>

                            <TextsIndividual>
                                <Title>Dueño</Title>
                                <SM>{animal.information.owner}</SM>
                            </TextsIndividual>

                            <TextsIndividual>
                                <Title>Condiciones</Title>

                                {animal.information.conditions ? (
                                    <SM>{animal.information.conditions}</SM>
                                ) : (
                                    <SM>Ninguna</SM>
                                )}
                            </TextsIndividual>
                        </SubTexts>

                        <ContainerDescription>
                            <LM>Informacion sobre {animal.name}</LM>
                            <SM>{animal.information.description_large}</SM>
                        </ContainerDescription>

                        <ContainerDescription>
                            <LM>Historia de rescate de {animal.name}</LM>
                            <SM>{animal.information.history}</SM>
                        </ContainerDescription>
                    </Texts>
                </Container>
            ))}
        </>
    );
};

const Container = styled.section`
    width: 50%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1250px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 45rem;
    border-radius: 0.3rem;
    height: 30rem;
    object-fit: cover;

    @media (max-width: 1250px) {
        width: 100%;
    }
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

const ContainerName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color.LightGray2};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    width: 100%;
`;

const SubTexts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1rem;

    @media (max-width: 450px) {
        grid-template-columns: repeat(1, auto);
    }
`;

const TextsIndividual = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color.LightGray};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    width: 100%;
`;

const Title = styled(SM)`
    font-weight: bold;
`;

const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
