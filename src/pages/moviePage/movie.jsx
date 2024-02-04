import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieName } from '../../api/api';
import style from './movie.module.scss';
import { MoviesList } from './components/MoviesList';

const Movie = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const query = searchParams.get('query');
  console.log(query);

  const updateQueryString = (value) => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateQueryString(searchValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMovieName(query);
        console.log(res);
        setMovies(res.results);
      } catch (error) {
        console.log(error);
        // Обробити помилку запиту та вивести відповідне повідомлення користувачеві
      }
    };

    if (query) {
      fetchData().catch((error) => console.log(error));
    }
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit" className={style.btn}>
        search
      </button>

      <MoviesList movies={movies} location={location} />
      
    </form>
  );
};

export default Movie;
