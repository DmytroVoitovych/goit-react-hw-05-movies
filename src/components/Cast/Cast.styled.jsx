import styled from '@emotion/styled';

export const List = styled.ul`
padding:0 15px;
display: flex;
list-style: none;
justify-content: center;
margin: -15px;
flex-wrap: wrap;
`;

export const Li = styled.li`
margin: 15px;
width: calc((100% - 120px)/4);

@media screen and  (max-width: 760px){
    width: calc((100% - 90px)/3);
    }

    @media screen and  (max-width: 460px){
    width: calc((100% - 60px)/2);
    }

img{
    width:100%;
    height: auto;
}

`;