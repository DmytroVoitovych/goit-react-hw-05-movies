import { useParams, } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import parse from 'html-react-parser';
import Linkify from 'linkify-react';
import { Block } from './Reviews.styled';
const axios = require('axios');

 const Reviews = () => {

        const { movieId } = useParams();
    const [rev, setRev] = useState([]);
        
    useEffect(() => {
    
      const getRev =  async ()=> {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5b6b31e1fe12fe8c46151504ff095a5b`);
                await  setRev(response.data.results);
               
            } catch (error) {
        
                console.log(error);
            }
               
        }
        getRev();
    }, [movieId]);
    
    return (  
        <Block>
       <> {rev.length !==0 ?  rev.map(({ id, author_details, content }) => { 
               return  <div key={id}><h5>{author_details.name ? author_details.name : 'Anonim'}</h5>
                <Linkify tagName="p" >{parse(content.replace('Rating:', '<b>Rating:</b>').split('_').join(' '))}</Linkify></div>
            }): <p>Отзывов нет</p> }   </>
       </Block>
    ); 
};

export default Reviews;