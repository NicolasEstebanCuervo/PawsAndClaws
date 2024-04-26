import styled from "@emotion/styled";
import { LM, SM, SMM } from "../../../theme/fonts";
import * as color from "../../../theme/colors";
import { IComment, deleteComment } from "../../../redux/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { PopConfirmation } from "../../componentsGlobals/pop-up/popConfirmation";

export const Comment = ({
    comment,
    newComment,
    position,
}: {
    comment: IComment;
    newComment?: boolean;
    position?: string;
}) => {
    const dispatch = useDispatch();

    const deleteThisComment = () => {
        dispatch(deleteComment(comment));
    };

    return (
        <ContainerComment>
            <ContainerNameAndDate>
                <Name>{comment.name}</Name>
                <Date position={position} colorText={color.LightGray2}>
                    {comment.date.toString()}
                </Date>
            </ContainerNameAndDate>
            <SM>{comment.comment}</SM>

            {newComment ? (
                <PopConfirmation
                    functionActive={deleteThisComment}
                    actionComponent={
                        <DeleteIcon className="bi bi-x"></DeleteIcon>
                    }
                    titleAlert="¿Estas seguro que quieres eliminar este comentario?"
                    descriptionAlert="Si decides borrar este comentario, lo siento, pero ya no podrás echarle otro vistazo."
                />
            ) : (
                <></>
            )}
        </ContainerComment>
    );
};

const ContainerComment = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;
`;

const ContainerNameAndDate = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;

`;

const Name = styled(SMM)`
    font-weight: bold;
    max-width: 500px;
`;

const Date = styled(SM)`
    position: ${({ position }: { position?: string }) =>
        position ? `${position}` : "static"};
    top: 0;
    right: 2rem; 
`;

const DeleteIcon = styled.i`
    font-size: 2rem;
    position: absolute;
    top: -0.5rem;
    right: 0;
    cursor: pointer;
`;
