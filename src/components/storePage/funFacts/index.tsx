import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "@theme/colors";
import { MM, XLLM } from "@theme/fonts";
import ImageBackground from "@assets/images/BgFunFactsStore.webp";
import { useEffect, useState } from "react";
import { useViewportSize } from "@components/componentsGlobals/useViewportSize";

export const FunFacts = () => {
    const [ref] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { width } = useViewportSize();
    const [xViewport, setXViewport] = useState(0);
    const [yViewport, setYViewport] = useState(0);

    useEffect(() => {
        if (width > 1600) {
            setXViewport(500);
            setYViewport(350);
        } else if (width <= 1600 && width > 1250) {
            setXViewport(420);
            setYViewport(400);
        } else {
            setXViewport(0);
            setYViewport(0);
        }
    }, [width]);

    const facts = [
        "Algunos juguetes están diseñados para dispensar golosinas cuando el perro resuelve un rompecabezas.",
        "La comida deshidratada para perros conserva los nutrientes naturales de los ingredientes.",
        "Los accesorios de moda para perros, como collares, pueden tener beneficios prácticos, como aumentar la visibilidad durante paseos nocturnos.",
        "Existen juguetes especialmente diseñados con materiales duraderos y resistentes, como caucho natural o nylon, para perros más vigorosos.",
        "Los juguetes interactivos para perros no solo mantienen a tu mascota entretenida, sino que también pueden ayudar a estimular su mente y reducir el aburrimiento.",
        "La ropa para perros puede ayudar a mantener caliente a tu mascota en climas fríos o protegerlo de la lluvia.",
        "Los collares equipados con luces LED aumentan la visibilidad durante paseos nocturnos, mejorando la seguridad de tu perro.",
        "Algunos perros mayores o con problemas de salud, como la artritis, se benefician de las camas ortopédicas que alivian la presión en sus articulaciones.",
    ];

    return (
        <Container ref={ref}>
            <XLLM>¿Sabías esto de los gatos?</XLLM>
            <SubContainer>
                {facts.map((fact, index) => (
                    <ContainerFact
                        key={index}
                        style={{
                            transform: `translate(${
                                Math.cos((index / facts.length) * 2 * Math.PI) *
                                xViewport
                            }px, ${
                                Math.sin((index / facts.length) * 2 * Math.PI) *
                                yViewport
                            }px)`,
                        }}
                    >
                        <MM>{fact}</MM>
                    </ContainerFact>
                ))}

                <Image
                    src={require("@assets/images/FunFact2.webp")}
                    alt="Imagen de una mascota"
                />
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    max-width: 2000px;
    height: 75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-top: 10rem;
    gap: 3rem;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
    padding: 5% 0;
    text-align: center;

    @media (max-width: 1250px) {
        background: ${color.LightBeige};
        height: auto;
    }
`;

const SubContainer = styled(motion.ul)`
    position: relative;

    @media (max-width: 1250px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        width: 100%;
    }
`;

const Image = styled.img`
    position: relative !important;
    top: 5rem;
    left: 11rem;
    transform: translate(-60%, -50%);
    width: 20rem;
    margin-top: 20rem;
    filter: drop-shadow(1px 1px 20px ${color.Brown});

    @media (max-width: 1250px) {
        display: none;
    }
`;

const ContainerFact = styled(motion.li)`
    text-align: center;
    position: absolute;
    width: 25rem;
    top: 25rem;
    left: 0rem;
    list-style: none;

    @media (max-width: 1250px) {
        position: static;
        text-align: left;
        list-style: disc outside none;
    }

    @media (max-width: 1000px) {
        width: 90%;
    }
`;
