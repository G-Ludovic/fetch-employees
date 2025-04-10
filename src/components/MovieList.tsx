import { useContext } from 'react';
import MovieContext from '../contexts/MovieContext';

function MovieList() {
  const { movies, setMovies } = useContext(MovieContext);

  return (
    <section>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
            <li key={movie.movie_id}>
                {movie.title} ({movie.release_year})
            </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;