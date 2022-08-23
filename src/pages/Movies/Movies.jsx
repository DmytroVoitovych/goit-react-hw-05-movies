import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bimg, Li, List, Title, } from "./Movies.styled";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useLocalStorage } from "./hook";
const axios = require('axios');

 const SearchBar = () => {
    const [value, setValue] = useState('');
     const [list, setList] = useLocalStorage([], 'list');
    
    const submit = (e) => {
     e.preventDefault(); //блок обновы
    const input = e.target.input.value.toLowerCase().trim();
      console.log(input);
    if (input !== '' && input !== value) {
         
        setValue(input);
        
      e.target.reset();
    }
           
    else if (input === value) {
      e.target.reset();
      Report.failure('Error', `You already have the result with this query on the page ${value}`);
    }
    else {
      Report.failure('Error', ' The fields must be filled in');
    }
    };

    useEffect(() => {
        
        const getPost = async ()=> {
                try {

                    if (value !== '') {
                         
                        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5b6b31e1fe12fe8c46151504ff095a5b&language=en-US&query=${value}`);
                        await setList(response.data.results);
                   }
                    
                } catch (error) {
        
                    console.log(error);
                }
               
            
        }
        
         getPost();
    
    }, [value, setList]);
   
     return (<Bimg> <form onSubmit={submit} >
        <button type="submit"  className="button">
            <span name="button-label">Search</span>
        </button>

        <Title
            name='input'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
        />
    </form>
    
        { list.length !== 0 &&  <List>
            { list.map(({ id, title, name }) => <Li key={id}><Link to={`/movies/${id}`} >{title ?? name}</Link></Li>)}
        </List>}
        </Bimg>
        
    
    );
};

export default SearchBar;