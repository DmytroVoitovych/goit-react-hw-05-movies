import React from 'react';
import { useParams, Link, useNavigate , Outlet} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Flex, View, Box, Li, } from './MovieDetails.styled';
import { IoChevronBack }  from "react-icons/io5";
import { Notfound } from 'pages/404/404';
import { Notify } from 'notiflix';

const axios = require('axios');

 const MovieDetails = () => {
    const { movieId } = useParams();
    const [fullInfo, setFullInfo] = useState({});
     const [genres, setGenres] = useState('');
     const [err, setErr] = useState(null);
    const nav = useNavigate();
    
     const funcBack = () => nav(-1);
    //  const funcHome = () => nav('/');
     
      const funcHome = useCallback(() => {
        
          return  nav('/');
        
    }, [nav]);
        
    useEffect(() => {
    
      const getPost = async ()=> {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5b6b31e1fe12fe8c46151504ff095a5b`);
                console.log(response);
                 await  setFullInfo(response.data);
                await setGenres(response.data.genres.map((g, index, arr) => g.name + ', ').join('').slice(0, -2)); 
                
            } catch (error) {
                 
                 setErr(error);
                Notify.failure(`${'Возврат на главную через 3 секунды'}`);
               setTimeout(()=> funcHome(), 3000);
                
            }
               
        }
        getPost();
    }, [movieId, funcHome]);
    
   //https://developers.themoviedb.org/3/getting-started/images  полезная инфа
    return (<>
        
        {err === null ? <> <Flex key={fullInfo.id}>
            <button type='click' onClick={funcBack}><IoChevronBack />Go back</button>
            <img src={`https://image.tmdb.org/t/p/w500${fullInfo.poster_path}`} alt="" />
            <div>
                <h2>{fullInfo.title ?? fullInfo.original_title}</h2>
                <h3>Overview</h3>
                <View>{fullInfo.overview}</View>
                <h3>Genres</h3>
                <p>{genres}</p>
            </div>
        </Flex >
            <Box>
                <h4>Additional information</h4>
                <ul>
                    <Li><Link to={`cast`}>Cast</Link></Li>
                    <Li><Link to={`reviews`} >Reviews</Link></Li>
                </ul>
            </Box>
            <Outlet /> </> : <Notfound style={{opacity: 1}} />}
              
        </> );
};
 
export default MovieDetails;