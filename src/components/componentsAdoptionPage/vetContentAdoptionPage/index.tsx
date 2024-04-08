import { useEffect, useState } from "react";
import { ImagesGenerator } from "../../../redux/Api";
import styled from "@emotion/styled";
import { SM, XLLM } from "../../../theme/fonts";
import * as color from "../../../theme/colors"

export const VetContentAdoptionPage = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const data = await ImagesGenerator("dog-sleep");
            setImageUrl(data);
        };

        fetchImage();
    }, []);

    return (
        <SectionVetContent>
            <TextsVetContent>
            <XLLM>Tu Mascota Merece Estar Bien</XLLM>
            <SM>
                Para asegurar su felicidad y vitalidad, es esencial llevar
                regularmente a tu mascota al veterinario. Desde chequeos de
                rutina hasta vacunaciones, estos profesionales garantizan su
                bienestar. ¡Agenda una cita veterinaria hoy mismo para brindarle
                el cuidado que se merece!
            </SM>
            <Button>
                Agendar cita
            </Button>
            </TextsVetContent>

            {imageUrl && <Image src={imageUrl} alt={`Imagen de `} />}
        </SectionVetContent>
    );
};

const SectionVetContent = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem;
    gap: 3rem;
`

const TextsVetContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 1rem;
`

const Button = styled.button`
    background-color: ${color.Blue};
    border: none;
    border-radius: 0.3rem;
    width: 30%;
    font-size: 1.2rem;
    height: 3rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9; 
    }
`

const Image = styled.img`
    width: 35rem;
    border-radius: 0.3rem;
`;
