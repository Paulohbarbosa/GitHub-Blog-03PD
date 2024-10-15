import styled from "styled-components";

export const PostInfoComponent = styled.div`
    padding: 2rem;
    margin-top: -5.5rem;

    background-color: ${props => props.theme["base-profile"]};

    border-radius: 10px;
    box-shadow: 2px 0px 28px 0px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h1{
        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
        line-height: 130%;
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
    }
`
export const PostInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    
    font-weight: bold;
    line-height: 160%;
    font-size: 0.75rem;
    
    a{
        text-decoration: none;
        gap: 0.5rem;
        display: flex;
        align-items: center;
        color: ${props => props.theme.blue};
        border-bottom: 1px solid transparent;

        &:hover{
            border-bottom: 1px solid;
            transition: border_bottom 0.7s;
        }
    }
`
export const PostInfoInformation = styled.div`
    display: flex;
    gap: 1.5rem;

    span{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${props => props.theme["base-span"]};

        svg{
            color: ${props => props.theme["base-label"]};
        }
    }
`