import { useEffect, useState } from "react";
import { ImagesGenerator } from "src/redux/temp_api/index";
import styled from "@emotion/styled";

export const ImageAnimal = ({ breed }: { breed: string }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const data = await ImagesGenerator(breed);
            setImageUrl(data);
        };

        fetchImage();
    }, [breed]);

    return (
        <div>
            {imageUrl && <Image src={imageUrl} alt={`Imagen de ${breed}`} />}
        </div>
    );
};

const Image = styled.img`
    width: 18rem;
    border-radius: 0.3rem;
    height: 12rem;
    min-height: 12rem;
    object-fit: cover;
`;
