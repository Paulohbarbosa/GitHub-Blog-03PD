import styled from "styled-components";

export const ProfileComponent = styled.div`
    padding: 2rem;
    margin-top: -5.5rem;

    background-color: ${props => props.theme["base-profile"]};

    border-radius: 10px;
    box-shadow: 2px 0px 28px 0px rgba(0,0,0,0.25);

    display: flex;
    gap: 2rem;

    img {
        width: 148px;
        border-radius: 8px;
    }
`
export const ProfileTextInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        line-height: 160%;
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};

        flex-grow: 1;
        margin-top: 0.5rem;
    }
`
export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    font-weight: bold;

    h1{
        line-height: 130%;
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
    }

    a{
        line-height: 160%;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: ${props => props.theme.blue};
        border-bottom: 1px solid transparent;

        &:hover{
            border-bottom: 1px solid;
            transition: border_bottom 0.7s;
        }
    }
`
export const ProfileInfo = styled.div`
    display: flex;
    gap: 1.5rem;

    span{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${props => props.theme["base-subtitle"]};

        svg{
            color: ${props => props.theme["base-label"]};
        }
    }
`