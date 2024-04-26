import { useEffect, useState } from "react";
import { ImagesGenerator } from "../../../redux/Api";
import styled from "@emotion/styled";
import { SM, XLLM } from "../../../theme/fonts";
import * as color from "../../../theme/colors";
import { Link } from "react-router-dom";

export const ContentAdoptionRequests = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const data = await ImagesGenerator("dog-street");
            setImageUrl(data);
        };

        fetchImage();
    }, []);

    return (
        <Container>
            <Texts>
                <div>
                    <XLLM>
                        Explora Más Oportunidades de Adopción Mientras Esperas
                    </XLLM>
                    <SM>
                        ¡Excelente decisión al embarcarte en el proceso de
                        adopción! Mientras esperas que se complete el proceso,
                        te invitamos a explorar más oportunidades de adopción.
                        En nuestro registro, encontrarás una amplia variedad de
                        animales que esperan ansiosamente encontrar un hogar
                        amoroso. Aunque ya estés en camino de darle un hogar a
                        un amigo peludo, considera la posibilidad de expandir tu
                        búsqueda y abrir tu corazón a otro compañero necesitado.
                        Cada adopción cuenta y cada vida que transformas con tu
                        amor y cuidado es invaluable. Continúa con tu noble
                        misión mientras esperas, porque aún hay muchas mascotas
                        esperando ser parte de una familia amorosa como la tuya.
                        ¡Sigue explorando y haciendo una diferencia en la vida
                        de estos maravillosos animales!
                    </SM>
                </div>
                <Link to="/adoption">
                    <Button>Explorar Más Opciones de Adopción</Button>
                </Link>
            </Texts>

            {imageUrl && <Image src={imageUrl} alt={`Imagen de `} />}
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
    padding: 10rem 0;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 2rem;
`;

const Button = styled.button`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 50%;
    font-size: 1.2rem;
    height: 4rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;

const Image = styled.img`
    width: 35rem;
    border-radius: 0.3rem;
`;
