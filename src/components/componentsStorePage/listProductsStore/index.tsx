import styled from "@emotion/styled";
import { CardProduct } from "../../componentsGlobals/cardProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IProduct, setProducts } from "../../../redux/reducers/productsSlice";
import { FetchProducts } from "../../../redux/Api";
import * as color from "../../../theme/colors"

export const ListProductsStore = ({indexA,indexB,background}:{indexA:number,indexB:number,background:boolean}) => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.ProductSlice.products);

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchProducts("products%20dogs%20cat");
            dispatch(setProducts(data));
        };
        fetchData();

    }, []);

    const productsMap = products[0];


    console.log(productsMap)
    return (
        <SectionProducts background={background}>
            <SubContainerProducts>
                {productsMap &&
                    productsMap
                        .slice(indexA, indexB)
                        .map((product: IProduct, index: number) => (
                            <CardProduct product={product} key={index} />
                        ))}
            </SubContainerProducts>
        </SectionProducts>
    );
};

const SectionProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    gap: 3rem;
    padding: 3rem 0;
    background: ${({background}:{background:boolean})=>
        background ? `${color.Cream}` : `${color.White}`};
`;
const SubContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
`;
