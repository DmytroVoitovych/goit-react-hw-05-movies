import styled from '@emotion/styled';


export const Flex = styled.div`
position: relative;
display: flex;
justify-content: flex-start;
padding: 0 15px;
padding-top: 30px;
gap: 48px;
img{
    max-width: 100%;
    max-height: 500px;
}

 @media screen and  (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }

    h3{
        margin: 0;
    }

    h2{
        margin-top: 0;
    }

    button{
        position: absolute;
        top: 2px;
        left: 15px;
        display: flex;
    border: 0;
    border-radius: 20px;
    padding: 4px 12px;
    border: 1px solid #F6AF9C;
    cursor: pointer;

    :hover{
     background-color: #8EE0B2;
     color: #7B1D04;
    }
    }
`;

export const View = styled.p`
max-width: 800px;
`; 

export const Box = styled.div`
padding: 0 15px;
`;

export const Li = styled.li`
color: #E64217;
list-style-type: "→ ";

a{
color: inherit;
font-weight: bold;
text-decoration: none; 


}

:hover a{
    text-decoration: underline;
}
`;

