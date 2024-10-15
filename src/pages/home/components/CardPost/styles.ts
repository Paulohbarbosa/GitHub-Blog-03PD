import styled from "styled-components";

export const CardPostContainer = styled.button`
    background: ${props => props.theme["base-post"]};
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 2rem;

    text-align: start;

    line-height: 160%;

    section{
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        h1{
            color: ${props => props.theme["base-title"]};
            font-size: 1.25rem;
        }
        span{
            width: 100%;
            max-width: 53px;
            color: ${props => props.theme["base-span"]};
            font-size: 0.875rem;
        }
    }
    p{
        margin-top: 1.25rem;
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;

        display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            text-overflow: ellipsis;
    }

    &:hover{
        border: 2px solid ${props => props.theme["base-label"]};
        transition: border 0.7s;
    }
`