import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
 gap: 28px;
 padding:24px 15px;
 list-style: none;
 margin: 0;
  border-bottom: 3px solid rgba(0, 0, 0, 0.095);
  a, .active{
    text-decoration: none;
     }

     .active{
        font-weight:bold;
     }

  li:hover{
    text-decoration: underline;
  }
`;