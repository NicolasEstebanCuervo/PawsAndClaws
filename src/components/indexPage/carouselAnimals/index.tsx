import styled from "@emotion/styled";
import { Carousel } from "react-bootstrap";
import { XLLM } from "@theme/fonts";
import { useSelector } from "react-redux";
import * as color from "@theme/colors";
import { useEffect, useState } from "react";
import { AnimalCard } from "@components/componentsGlobals/cardAnimal";
import { IAnimal } from "@reducers/animalSlice";

export const CarouselAnimals = () => {
    const animalsSlice = useSelector((state: any) => state.AnimalSlice);
    const [viewport, setViewport] = useState(5);

    useEffect(() => {
        const calculateWidth = () => {
            if (document.documentElement.clientWidth > 1750) {
                setViewport(5);
            } else if (
                document.documentElement.clientWidth <= 1750 &&
                document.documentElement.clientWidth >= 1450
            ) {
                setViewport(4);
            } else if (
                document.documentElement.clientWidth <= 1450 &&
                document.documentElement.clientWidth >= 950
            ) {
                setViewport(3);
            } else if (document.documentElement.clientWidth <= 950 && document.documentElement.clientWidth >= 550) {
                setViewport(2);
            } else{
                setViewport(1)
            }
        };

        calculateWidth();
    }, []);

    return (
        <Container>
            <Title>Adopta un nuevo amigo</Title>
            <CarouselCustom
                indicators={false}
                interval={4000}
                prevIcon={<></>}
                nextIcon={<></>}
            >
                {animalsSlice.animals &&
                    animalsSlice.animals.map(
                        (animal: IAnimal, index: number) =>
                            index % 5 === 0 && (
                                <Carousel.Item
                                    key={index}
                                    style={{ height: 600 }}
                                >
                                    <ContainerAnimals>
                                        {animalsSlice.animals
                                            .slice(index, index + viewport)
                                            .map(
                                                (
                                                    animal: IAnimal,
                                                    subIndex: number
                                                ) => (
                                                    <AnimalCard
                                                        key={index + subIndex}
                                                        animal={animal}
                                                    />
                                                )
                                            )}
                                    </ContainerAnimals>
                                </Carousel.Item>
                            )
                    )}
            </CarouselCustom>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
    padding: 5rem 0;
    background: ${color.Cream};
`;

const Title = styled(XLLM)`
    font-weight: bold;
    text-align: center;
`;

const CarouselCustom = styled(Carousel)`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        width: 100%;
    }

    @media (max-width: 450px) {
        width: 95%;
    }
`;

const ContainerAnimals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
        gap: 0rem;
    }
`;
