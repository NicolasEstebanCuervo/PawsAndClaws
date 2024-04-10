import styled from "@emotion/styled"
import { MM, XLLM, XLM } from "../../../theme/fonts"
import * as color from "../../../theme/colors"

export const SocialNetworks = ()=>{

    

    return(
        <ContainerSocialNetworks>
            <TitleSocialNetworks>Redes sociales</TitleSocialNetworks>
            <TextsSocialNetworks>
                <IndividualSocialNetwork>
                    <IconSocialNetwork className="bi bi-instagram"></IconSocialNetwork>
                    <div>
                        <TitleSocialNetwork>Facebook</TitleSocialNetwork>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </IndividualSocialNetwork>

                <IndividualSocialNetwork>
                    <IconSocialNetwork className="bi bi-facebook"></IconSocialNetwork>
                    <div>
                        <TitleSocialNetwork>Facebook</TitleSocialNetwork>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </IndividualSocialNetwork>

                <IndividualSocialNetwork>
                    <IconSocialNetwork className="bi bi-twitter"></IconSocialNetwork>
                    <div>
                        <TitleSocialNetwork>Facebook</TitleSocialNetwork>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </IndividualSocialNetwork>

                
                <IndividualSocialNetwork>
                    <IconSocialNetwork className="bi bi-linkedin"></IconSocialNetwork>
                    <div>
                        <TitleSocialNetwork>Facebook</TitleSocialNetwork>
                        <MM>@PawsAndClaws</MM>
                    </div>
                </IndividualSocialNetwork>
            </TextsSocialNetworks>
        </ContainerSocialNetworks>
    )
}

const ContainerSocialNetworks = styled.div`
    background: ${color.LightBeige};
    padding-left: 2rem;
    width: 30rem;
    height: 35rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
`
    
const TitleSocialNetworks = styled(XLLM)`
    font-weight: bold;
`

const TextsSocialNetworks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const IndividualSocialNetwork = styled.div`
    display: flex;
    gap: 1rem;
`

const IconSocialNetwork = styled.i`
    font-size: 3rem;
    cursor: pointer;
`

const TitleSocialNetwork = styled(XLM)`
    cursor: pointer;
`
