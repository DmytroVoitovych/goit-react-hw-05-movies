import styled from '@emotion/styled';

export const Bimg = styled.div`
background: url('https://www.soyuz.ru/public/uploads/files/2/7260550/20190326212031140add3140.jpg')  no-repeat center center fixed;
text-align: center;
 background-size: cover;
 min-height: 100vh;
 padding-top: 24px;
 
 `;

export const List = styled.ul`
padding: 28px;
border-radius: 24px;
  background: rgba(255, 255, 255, 0.8);
display: inline-flex;
    flex-direction: column;
    align-items: baseline;
    gap: 4px;
    list-style-type: "→ ";
    color: inherit;

    @media screen and  (min-width: 800px){
        font-size: 24px;
    }
`
export const Title = styled.input`
/* outline: 1px solid rgba(255, 255, 255, 0.8); */
border: 2px solid #808080;
outline: none;

margin: 0;
::first-letter{
color: #F8D440
}
`;




export const Li = styled.li`
color: #E64217;

a{
color: inherit;
font-weight: bold;
text-decoration: none; 


}

:hover a{
    text-decoration: underline;
}
`;



