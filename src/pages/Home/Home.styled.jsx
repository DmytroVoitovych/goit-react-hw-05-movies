import styled from '@emotion/styled';

export const Bimg = styled.main`
background: url('http://film-like.com/images/best_movies.jpg')  no-repeat center center fixed;
text-align: center;
 background-size: cover;
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
export const Title = styled.h1`
color: #808080;
margin: 0;
::first-letter{
color: #F8D440
}
`;




export const Li = styled.li`
color: 
#E64217;


a{
color: inherit;
font-weight: bold;
text-decoration: none; 


}

:hover a{
    text-decoration: underline;
}
`;