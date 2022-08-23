import { lazy, Suspense } from "react";
import { Route, Routes, } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { useState, useEffect, } from "react";
import { Notfound } from "pages/404/404";

const Home = lazy(()=> import("pages/Home/Home"));
const SearchBar = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(()=>import("./Reviews/Reviews"));

const axios = require('axios');

export const App = () => {
  const [parametr] = useState('trending/all/week');
  const [req, setReq] = useState([]);

  useEffect(() => {
   const getUser = async ()=> {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${parametr}?api_key=5b6b31e1fe12fe8c46151504ff095a5b`);
    
        await setReq(response.data.results);
         
      } catch (error) {
        
        console.log(error);
      }
    };
    getUser(); 
  }, [parametr]);
  
   return (
  
    <>
      
      <Routes>
         
        <Route path="/" element={<SharedLayout />}>
        <Route   index element={<Suspense fallback={<h2>Loading... </h2>}><Home trends={req}/></Suspense>}/>
          <Route path='movies' element={<Suspense fallback={<h2>Loading... </h2>}><SearchBar /></Suspense>} />
          <Route path='movies/:movieId/*' element={<Suspense fallback={<h2>Loading... </h2>}><MovieDetails /></Suspense>} >
            <Route path='cast' element={<Suspense fallback={<h2>Loading... </h2>}><Cast /></Suspense>} />
            <Route path='reviews' element={<Suspense fallback={<h2>Loading... </h2>}><Reviews /></Suspense>}/>
          </Route>
          <Route path="*" element={<Notfound/>}></Route>
           </ Route>
        </Routes>
        
       {/* //тренды */}
      </>
  );
};
