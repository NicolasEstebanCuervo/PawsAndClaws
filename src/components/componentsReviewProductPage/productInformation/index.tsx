import { useDispatch, useSelector } from "react-redux";
import { LM, SM, XLM } from "../../../theme/fonts";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import { IProduct} from "../../../redux/reducers/productsSlice";

export const ProductInformation = () => {
    const productSelected = useSelector(
        (state: any) => state.ProductSlice.productSelected
    );

    const dispatch = useDispatch();

    return (
        <>
            {productSelected.map((product: IProduct) => (
                <SectionAnimalInformation key={product.usItemId}>
                    <ImageAnimal
                        src={product.imageInfo.thumbnailUrl}
                        alt={`Imagen de ${product.name}`}
                    />

                    <LineDivider></LineDivider>

                    <TextsAnimalInformation>
                        <XLM>Información de la mascota</XLM>
                        <ContainerNameAnimal>
                            <TitleIndividual>Nombre</TitleIndividual>
                            <SM>{product.name}</SM>
                        </ContainerNameAnimal>

                        <SubContainerTexts>
                            <IndividualTexts>
                                <TitleIndividual>Fabricante</TitleIndividual>
                                {product.brand ? (
                                    <SM>{product.brand}</SM>
                                ) : (
                                    <SM>Walmart</SM>
                                )}
                            </IndividualTexts>

                            <IndividualTexts>
                                
                                <TitleIndividual>Numero de reseñas</TitleIndividual>
                                <SM>{product.numberOfReviews}</SM>
                            </IndividualTexts>
                        </SubContainerTexts>
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
    width: 25rem;
    border-radius: 0.3rem;
    height: 25rem;
    object-fit: cover;
`;

const TextsAnimalInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
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
