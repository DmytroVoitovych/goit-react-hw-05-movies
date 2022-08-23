import { useParams, } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import { Li, List } from './Cast.styled';

const axios = require('axios');

const Cast = () => {
      
    const { movieId } = useParams();
    const [actor, setActor] = useState([]);
           
    useEffect(() => {
    
      const  getActor = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5b6b31e1fe12fe8c46151504ff095a5b`);
                await setActor(response.data.cast);
                
            } catch (error) {
                console.log(error);
             }
               
        }
        getActor();
    }, [movieId]);

    return (
        <List>
            { actor.map(({name,id,character, profile_path, original_name})=> <Li key={id}>
                { profile_path ? <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />: <img src={'https://outlinetts.com/no_image.webp'} alt={name} />}
                <p>{name??original_name}</p>
                <p><b>Character: </b>{character}</p>
            </Li>)}
        </List>
    );
} 

export default Cast;