import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "@theme/colors";
import { MM, XLLM } from "@theme/fonts";
import ImageBackground from "@assets/images/BgFunFactsIndex.webp";
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
        "Los gatos tienen un sentido del olfato muy agudo, siendo capaces de detectar olores hasta 14 veces mejor que los humanos.",
        "Los gatos tienen la habilidad de enderezar su cuerpo durante una caída desde una gran altura, lo que les permite aterrizar en sus patas. Esto se conoce como el 'reflejo de enderezamiento'.",
        "Los gatos pueden dormir hasta 16 horas al día, pero esta cantidad varía según la edad y el nivel de actividad del gato.",
        "La pupila vertical de los gatos les permite una mejor visión nocturna y la capacidad de percibir movimientos rápidos con mayor claridad.",
        "Los gatos tienen un tercer párpado llamado 'membrana nictitante' que les protege los ojos y ayuda a mantenerlos lubricados.",
        "Algunos gatos tienen la capacidad de caminar en una superficie muy estrecha, como una barandilla o un alféizar, gracias a su extraordinario equilibrio.",
        "Los gatos tienen glándulas odoríferas en varias partes de su cuerpo, incluyendo la barbilla, la frente y las patas, que utilizan para marcar su territorio.",
        "Los gatos son conocidos por su agilidad y capacidad de saltar. Pueden saltar hasta seis veces la longitud de su cuerpo en un solo salto.",
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
                    src={require("@assets/images/FunFact1.webp")}
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
    left: 7rem;
    transform: translate(-60%, -50%);
    width: 15rem;
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
    right: -5rem;
    list-style: none;

    @media (max-width: 1250px) {
        position: static;
        text-align: left;
        list-style: disc outside none;
    }

    @media (max-width: 1250px) {
        width: 90%;
    }
`;