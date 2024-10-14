import styled from "styled-components";

import fundo from "./../../assets/Cover.svg"

export const HeaderContainer = styled.header`
background-image: url(${fundo});
background-repeat: no-repeat;
background-size: cover;
height: 18.5rem;

display: flex;
align-items: start;
justify-content: center;

img{
    margin-top: 4rem;
    width: 148px;	
}
`