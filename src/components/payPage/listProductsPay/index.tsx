import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { CardProductPay } from "../../formPayPage/cardProductPay";
import { IProduct } from "@reducers/productsSlice";
import { SM, XLLM } from "@theme/fonts";
import { Link } from "react-router-dom";
import * as color from "@theme/colors";

export const ListProductsPay = () => {
    const productSlice = useSelector(
        (state: any) => state.ProductSlice
    );

    return (
        <Container>
            {productSlice.productsInTheCart >= 0 ? (
                <SubContainer>
                    <Texts>
                        <div>
                            <XLLM>¡Tu carrito está vacío!</XLLM>
                            <SM>
                                ¿Aún no has agregado productos? ¡No te
                                preocupes! Explora nuestra tienda y encuentra
                                todo lo que necesitas para consentir a tus
                                mascotas. Desde juguetes hasta alimentos y
                                accesorios, tenemos lo mejor para ellos. ¡Haz
                                que se sientan especiales ahora!
                            </SM>
                        </div>
                        <Link to="/products">
                            <Button>Explorar la Tienda</Button>
                        </Link>
                    </Texts>
                </SubContainer>
            ) : (
                <XLLM>Tus productos</XLLM>
            )}
            {productSlice.productsInTheCart &&
                productSlice.productsInTheCart.map((product: IProduct) => (
                    <CardProductPay
                        quantity={product.quantity}
                        product={product}
                        key={product.usItemId}
                    />
                ))}
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2% 0;
    gap: 2rem;
    width: 50%;
`;

const SubContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 5rem;
    width: 100%;
    background: ${color.Cream};
    padding: 2rem 0;
    border-radius: 0.3rem;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 70%;
    gap: 2rem;
`;

const Button = styled.button`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;
