import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
`
export const PostPublications = styled.div`
    font-size: 1rem;
    line-height: 160%;
    color: ${props => props.theme["base-text"]};
    padding: 2.5rem 2rem;

    h2{
        color: ${props => props.theme.blue};
        font-weight: normal;
        margin-top: 1.5rem;
    }

    div{
        background: ${props => props.theme["base-post"]};
        padding: 1rem;
        border-radius: 2px;
        font: 400 1rem Fira Code, sans-serif;
        line-height: 160%;

        em{
            color: #80ABD6;
            font-style: normal;
        }
        i{
            color: #64d445;
            font-style: normal;
        }
        span{
            color: #4f6173;
        }
    }
`