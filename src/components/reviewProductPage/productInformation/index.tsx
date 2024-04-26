import { useSelector } from "react-redux";
import { SM, XLM } from "../../../theme/fonts";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";

export const ProductInformation = () => {
    const productSlice = useSelector(
        (state: any) => state.ProductSlice
    );

    return (
        <>
            <Container>
                <Image
                    src={productSlice.productSelected.imageInfo.thumbnailUrl}
                    alt={`Imagen de ${productSlice.productSelected.name}`}
                />

                <LineDivider></LineDivider>

                <Texts>
                    <XLM>Información del producto</XLM>
                    <ContainerName>
                        <Title>Nombre</Title>
                        <SM>{productSlice.productSelected.name}</SM>
                    </ContainerName>

                    <SubTexts>
                        <TextsIndividual>
                            <Title>Fabricante</Title>
                            {productSlice.productSelected.brand ? (
                                <SM>{productSlice.productSelected.brand}</SM>
                            ) : (
                                <SM>Walmart</SM>
                            )}
                        </TextsIndividual>

                        <TextsIndividual>
                            <Title>Numero de reseñas</Title>
                            <SM>{productSlice.productSelected.numberOfReviews}</SM>
                        </TextsIndividual>
                    </SubTexts>
                </Texts>
            </Container>
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
`;

const Image = styled.img`
    width: 25rem;
    border-radius: 0.3rem;
    height: 25rem;
    object-fit: cover;
`;

const Texts = styled.div`
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

const ContainerName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color.LightGray2};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
`;

const SubTexts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const TextsIndividual = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color.LightGray};
    padding: 1rem 1rem;
    border-radius: 0.3rem;
`;

const Title = styled(SM)`
    font-weight: bold;
`;
