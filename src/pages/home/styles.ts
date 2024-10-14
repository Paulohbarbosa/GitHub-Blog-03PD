import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;

    input{
        width: 100%;
        padding: 0.75rem 1rem;
        margin-top: 0.75rem;
        margin-bottom: 3rem;

        border-radius: 6px;
        border: 1px solid ${props => props.theme["base-border"]};

        background: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }

        &:focus{
            border: 1px solid ${props => props.theme.blue};
            transition: border 2s;
        }
    }
`

export const HomeInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.5rem;

    h2{
        font-size: 1.125rem;
        font-weight: bold;
        line-height: 160%;
        color: ${props => props.theme["base-subtitle"]};
    }

    span{
        font-size: 0.875rem;
        line-height: 160%;
        color: ${props => props.theme["base-span"]};
    }
`
export const HomePublications = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
`