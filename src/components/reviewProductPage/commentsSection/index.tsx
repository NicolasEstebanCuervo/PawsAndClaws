import { Divider, Input, Progress, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../comment";
import {
    IComment,
    createANewComment,
    createANewComments,
} from "@reducers/productsSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FetchComments } from "@api/index";
import * as color from "@theme/colors";
import { LM, SM, XLLM } from "@theme/fonts";
import { StarComponent } from "../../componentsGlobals/cardProduct";
import { PopNotification } from "../../componentsGlobals/pop-up/popNotification";

export const CommentsSection = () => {
    const productSlice = useSelector((state: any) => state.ProductSlice);
    const [numRandom, setNumrandom] = useState(1);

    const [inputName, setInputName] = useState("");
    const [inputComment, setInputComment] = useState("");
    const [idProduct, setProduct] = useState(0);
    const [activePop, setActivePop] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createANewComments(FetchComments()));
        setNumrandom(Math.floor(Math.random() * 27));

        setProduct(productSlice.productSelected.usItemId);
    }, []);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    };

    const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
        setInputComment(e.target.value);
    };

    const commentProduct = productSlice.comments;
    const newComments = productSlice.newComments;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            createANewComment({
                id: uuidv4(),
                name: inputName,
                date: new Date().toLocaleDateString("en-US"),
                comment: inputComment,
                productId: idProduct,
            })
        );

        setActivePop(true);

        setInterval(() => {
            setActivePop(false);
        }, 100);

        setInputName("");
        setInputComment("");
    };

    const filteredComments = newComments.filter((comment: IComment) => {
        return comment.productId === idProduct;
    });

    return (
        <Container>
            <Title>Comentarios</Title>

            <ContainerFormComments>
                <Form onSubmit={handleSubmit} data-testid="form">
                    <LM>Deja un comentario</LM>
                    <Input
                        onChange={onChangeName}
                        value={inputName}
                        placeholder="Nombre"
                        maxLength={30}
                        required
                    ></Input>
                    <Input
                        onChange={onChangeComment}
                        value={inputComment}
                        placeholder="Comentario"
                        maxLength={500}
                        required
                    ></Input>

                    <PopNotification
                        actionComponent={
                            <Button data-testid="button" type="submit" />
                        }
                        active={activePop}
                        titleAlert="¡Comentario agregado con exito!"
                        descriptionAlert="¡Ahora puedes ver tu comentario en la seccion de comentarios!"
                    />
                </Form>
            </ContainerFormComments>

            <ContainerComments>
                <Rating>
                    <ContainerRaiting>
                        <XLLM>5.0</XLLM>
                        <SubContainerRaiting>
                            <ContainerStars>
                                {StarComponent({
                                    colorStar: `${color.Blue}`,
                                    fontSize: 1,
                                })}
                            </ContainerStars>
                            <SM>15 Calificaciones</SM>
                        </SubContainerRaiting>
                    </ContainerRaiting>

                    <ContainerProgressBars>
                        <div>
                            <Stack spacing={10}>
                                <Progress
                                    borderRadius={10}
                                    colorScheme="blue"
                                    size="sm"
                                    value={100}
                                />
                            </Stack>
                        </div>
                        <SM>
                            5 <i className="bi bi-star-fill"></i>
                        </SM>
                    </ContainerProgressBars>

                    <ContainerProgressBars>
                        <div>
                            <Stack spacing={10}>
                                <Progress
                                    borderRadius={10}
                                    colorScheme="blue"
                                    size="sm"
                                    value={0}
                                />
                            </Stack>
                        </div>
                        <SM>
                            4 <i className="bi bi-star-fill"></i>
                        </SM>
                    </ContainerProgressBars>
                    <ContainerProgressBars>
                        <div>
                            <Stack spacing={10}>
                                <Progress
                                    borderRadius={10}
                                    colorScheme="blue"
                                    size="sm"
                                    value={0}
                                />
                            </Stack>
                        </div>
                        <SM>
                            3 <i className="bi bi-star-fill"></i>
                        </SM>
                    </ContainerProgressBars>
                    <ContainerProgressBars>
                        <div>
                            <Stack spacing={10}>
                                <Progress
                                    borderRadius={10}
                                    colorScheme="blue"
                                    size="sm"
                                    value={0}
                                />
                            </Stack>
                        </div>
                        <SM>
                            2 <i className="bi bi-star-fill"></i>
                        </SM>
                    </ContainerProgressBars>
                    <ContainerProgressBars>
                        <div>
                            <Stack spacing={10}>
                                <Progress
                                    borderRadius={10}
                                    colorScheme="blue"
                                    size="sm"
                                    value={0}
                                />
                            </Stack>
                        </div>
                        <SM>
                            1 <i className="bi bi-star-fill"></i>
                        </SM>
                    </ContainerProgressBars>
                </Rating>
                <SubContainerComments>
                    <LM>Comentarios destacados</LM>
                    {filteredComments ? (
                        filteredComments.map((comment: IComment) => (
                            <div key={comment.id}>
                                <Comment
                                    position="absolute"
                                    newComment={true}
                                    comment={comment}
                                    key={comment.id}
                                />
                                <Divider />
                            </div>
                        ))
                    ) : (
                        <></>
                    )}

                    {commentProduct &&
                        commentProduct
                            .slice(numRandom, numRandom + 3)
                            .map((comment: IComment) => (
                                <ContainerCommentIndividual key={comment.id}>
                                    <Comment
                                        comment={comment}
                                        key={comment.id}
                                    />

                                    <Divider />
                                </ContainerCommentIndividual>
                            ))}
                </SubContainerComments>
            </ContainerComments>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 60%;

    @media (max-width: 1250px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 85%;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;

const Title = styled(XLLM)`
    text-align: center;
`;

const ContainerFormComments = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    @media (max-width: 750px) {
        width: 80%;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;

    @media (max-width: 750px) {
        width: 80%;
    }
`;

const Button = styled.input`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 30%;
    font-size: 1rem;
    height: 2rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;

const ContainerComments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Rating = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 50vh;

    @media (max-width: 750px) {
        height: auto;
        margin-bottom: 3rem;
    }
`;

const ContainerRaiting = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const SubContainerRaiting = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerStars = styled.div`
    display: flex;
    gap: 0.2rem;
`;

const ContainerProgressBars = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    grid-template-columns: 90% 10%;
`;

const SubContainerComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const ContainerCommentIndividual = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
